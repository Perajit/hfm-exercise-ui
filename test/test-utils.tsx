import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { vi } from 'vitest';

export const renderWithWrapper = (element: ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
        onError: (error) => console.error(error),
      },
    },
  });

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return render(element, { wrapper: Wrapper });
};

export const suppressConsoleError = () => {
  vi.spyOn(console, 'error').mockImplementation(() => {
    console.log('--- mock console eerror');
  });
};
