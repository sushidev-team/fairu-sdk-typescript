'use client';

import { createFairuClient } from '@fairu/sdk';

// Create a singleton client for client-side usage
let clientInstance: ReturnType<typeof createFairuClient> | null = null;

export function getFairuClient() {
  if (!clientInstance) {
    clientInstance = createFairuClient({
      url: process.env.NEXT_PUBLIC_FAIRU_URL || 'https://fairu.app/graphql',
      token: process.env.NEXT_PUBLIC_FAIRU_TOKEN || '',
    });
  }
  return clientInstance;
}
