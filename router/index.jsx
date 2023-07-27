import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout";
import Main from "../src/pages/Main.jsx";
import SearchPage from "../src/pages/SearchPage.jsx";
import NotFoundPage from "../src/pages/NotFoundPage.jsx";
import MovieSinglePage from "../src/pages/MovieSinglePage.jsx";
import PersonPage from "../src/pages/PersonPage.jsx";
import DiscoverVideosPage from "../src/pages/DiscoverVideosPage.jsx";
import ErrorElement from "../src/components/ErrorElement";

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
          element: <MovieSinglePage />,
          errorElement: <ErrorElement/>
        },
        {
          path: "person/:id",
          element: <PersonPage />,
        },
        {
          path: "discover/:movieType",
          element: <DiscoverVideosPage />,
        },
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
