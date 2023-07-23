import React, {useEffect} from 'react';
import {RouterProvider, ScrollRestoration} from "react-router-dom";
import { router } from "../router/index.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {Provider, useDispatch} from "react-redux";
import { store } from "../store/index.js";
import {fetchUrl} from "../store/slices/urlSlice.js";

const queryClient = new QueryClient(
  {defaultOptions: {queries : { staleTime: 300000, cacheTime: 300000, keepPreviousData:true}}}
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
