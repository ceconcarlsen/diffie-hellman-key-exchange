'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider publishableKey="pk_test_aW1tb3J0YWwtc3BvbmdlLTIzLmNsZXJrLmFjY291bnRzLmRldiQ">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;
