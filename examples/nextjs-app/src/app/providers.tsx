'use client';

import { FairuProvider } from '@fairu/sdk/react';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const token = process.env.NEXT_PUBLIC_FAIRU_TOKEN || '';
  const url = process.env.NEXT_PUBLIC_FAIRU_URL || 'https://fairu.app/graphql';

  return (
    <FairuProvider url={url} token={token}>
      {children}
    </FairuProvider>
  );
}
