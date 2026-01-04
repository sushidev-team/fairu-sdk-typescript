import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://fairu.app/schema.graphql',
  documents: ['src/graphql/operations/**/*.graphql'],
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
      config: {
        scalars: {
          Date: 'string',
          DateTime: 'string',
          WorkflowStructure: 'Record<string, unknown>',
        },
        enumsAsTypes: true,
        skipTypename: false,
        dedupeFragments: true,
        exportFragmentSpreadSubTypes: true,
        nonOptionalTypename: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
        },
        maybeValue: 'T | null',
        // For typed-document-node
        documentMode: 'documentNode',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
