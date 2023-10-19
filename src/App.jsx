import React from "react";
import { Provider } from "react-redux";
import { Routes } from "../router/index.jsx";
import { store } from "../store/index.js";
import { QueryProvider } from "../queryClient/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <Routes />
      </QueryProvider>
    </Provider>
  );
}

export default App;
