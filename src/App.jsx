import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import { router } from "../router/index.jsx";
import { store } from "../store/index.js";


export const queryClient = new QueryClient(
  {defaultOptions: {queries : { staleTime: 300000, retry: 3, keepPreviousData:true}}}
);

function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
