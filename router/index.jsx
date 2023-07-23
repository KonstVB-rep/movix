import React from "react";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import { Layout } from "../src/components/Layout/index.jsx";
import Main from "../src/pages/Main.jsx";
import SearchPage from "../src/pages/SearchPage.jsx";
import NotFoundPage from "../src/pages/NotFoundPage.jsx";
import MoviePage from "../src/pages/MoviePage.jsx";
import PersonPage from "../src/pages/PersonPage.jsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "search/:query",
          element: <SearchPage />,
        },
        {
          path: ":movieType/:id",
          element: <MoviePage />,
        },
        {
          path: "/person/:id",
          element: <PersonPage />,
        },
        // {
        //   path: "explore/:type",
        //   element: <LoginPage />,
        // },
        // {
        //   path: "search/:query",
        //   element: <RegisterPage />,
        // },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
