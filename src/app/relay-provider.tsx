'use client';

import { ReactNode, Suspense, useMemo } from 'react';
import { ReactRelayContext } from 'react-relay';
import { getCurrentEnvironment } from '@/lib/relay/environment';

type RelayProviderProps = {
  children: ReactNode;
};

export default function RelayProvider({ children }: RelayProviderProps) {
  const environment = useMemo(() => getCurrentEnvironment(), []);
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <Suspense fallback={null}>{children}</Suspense>
    </ReactRelayContext.Provider>
  );
}
