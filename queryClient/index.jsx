import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 300000, retry: 3, keepPreviousData: true },
  },
});

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
