import type { CombinedError } from '@urql/core';
import type { GraphQLError as BaseGraphQLError } from 'graphql';

/**
 * Base error class for all Fairu SDK errors.
 */
export class FairuError extends Error {
  public readonly code?: string;
  public readonly originalError?: Error;

  constructor(message: string, code?: string, originalError?: Error) {
    super(message);
    this.name = 'FairuError';
    this.code = code;
    this.originalError = originalError;

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FairuError);
    }
  }

  /**
   * Create a FairuError from a urql CombinedError.
   */
  static fromCombinedError(error: CombinedError): FairuError {
    // Check for GraphQL errors first
    if (error.graphQLErrors.length > 0) {
      const graphqlError = error.graphQLErrors[0];
      const category = graphqlError.extensions?.category as string | undefined;

      // Handle validation errors
      if (category === 'validation') {
        return new ValidationError(
          graphqlError.message,
          graphqlError.extensions?.validation as Record<string, string[]>
        );
      }

      // Handle authentication errors
      if (category === 'authentication') {
        return new AuthenticationError(graphqlError.message);
      }

      // Return generic GraphQL error
      return new GraphQLError(error.graphQLErrors);
    }

    // Handle network errors
    if (error.networkError) {
      return new FairuError(
        `Network error: ${error.networkError.message}`,
        'NETWORK_ERROR',
        error.networkError
      );
    }

    // Fallback to generic error
    return new FairuError(error.message);
  }

  /**
   * Check if this error is a network error.
   */
  isNetworkError(): boolean {
    return this.code === 'NETWORK_ERROR';
  }

  /**
   * Convert error to a plain object for serialization.
   */
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
    };
  }
}

/**
 * Error class for validation failures.
 */
export class ValidationError extends FairuError {
  public readonly validationErrors: Record<string, string[]>;

  constructor(
    message: string,
    validationErrors: Record<string, string[]> = {}
  ) {
    super(message, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;
  }

  /**
   * Get errors for a specific field.
   */
  getFieldErrors(field: string): string[] {
    return this.validationErrors[field] ?? [];
  }

  /**
   * Check if a specific field has errors.
   */
  hasFieldError(field: string): boolean {
    return field in this.validationErrors;
  }

  /**
   * Get all field names with errors.
   */
  getFields(): string[] {
    return Object.keys(this.validationErrors);
  }

  /**
   * Get the first error message for a field.
   */
  getFirstFieldError(field: string): string | undefined {
    return this.validationErrors[field]?.[0];
  }

  /**
   * Get all error messages as a flat array.
   */
  getAllMessages(): string[] {
    return Object.values(this.validationErrors).flat();
  }

  /**
   * Check if there are any validation errors.
   */
  hasErrors(): boolean {
    return Object.keys(this.validationErrors).length > 0;
  }

  /**
   * Convert to JSON for serialization.
   */
  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      validationErrors: this.validationErrors,
    };
  }
}

/**
 * Error class for authentication failures.
 */
export class AuthenticationError extends FairuError {
  constructor(message: string = 'Invalid or missing API token') {
    super(message, 'AUTHENTICATION_ERROR');
    this.name = 'AuthenticationError';
  }

  /**
   * Check if this is an expired token error.
   */
  isTokenExpired(): boolean {
    return this.message.toLowerCase().includes('expired');
  }

  /**
   * Check if this is a missing token error.
   */
  isMissingToken(): boolean {
    return this.message.toLowerCase().includes('missing');
  }
}

/**
 * Error class for GraphQL-specific errors.
 */
export class GraphQLError extends FairuError {
  public readonly graphqlErrors: readonly BaseGraphQLError[];

  constructor(errors: readonly BaseGraphQLError[]) {
    const messages = errors.map((e) => e.message).join('; ');
    super(messages, 'GRAPHQL_ERROR');
    this.name = 'GraphQLError';
    this.graphqlErrors = errors;
  }

  /**
   * Get the first GraphQL error.
   */
  getFirstError(): BaseGraphQLError | undefined {
    return this.graphqlErrors[0];
  }

  /**
   * Get all GraphQL errors.
   */
  getErrors(): readonly BaseGraphQLError[] {
    return this.graphqlErrors;
  }

  /**
   * Check if any errors are validation errors.
   */
  hasValidationErrors(): boolean {
    return this.graphqlErrors.some(
      (e) => e.extensions?.category === 'validation'
    );
  }

  /**
   * Get validation errors as a record of field names to error messages.
   */
  getValidationErrors(): Record<string, string[]> {
    const validationErrors: Record<string, string[]> = {};

    for (const error of this.graphqlErrors) {
      if (error.extensions?.validation) {
        Object.assign(validationErrors, error.extensions.validation);
      }
    }

    return validationErrors;
  }

  /**
   * Check if any errors are authentication errors.
   */
  hasAuthenticationErrors(): boolean {
    return this.graphqlErrors.some(
      (e) => e.extensions?.category === 'authentication'
    );
  }

  /**
   * Get error paths.
   */
  getPaths(): (readonly (string | number)[] | undefined)[] {
    return this.graphqlErrors.map((e) => e.path);
  }

  /**
   * Convert to JSON for serialization.
   */
  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      errors: this.graphqlErrors.map((e) => ({
        message: e.message,
        path: e.path,
        extensions: e.extensions,
      })),
    };
  }
}
