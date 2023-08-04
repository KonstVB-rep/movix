import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorElement from "../src/components/ErrorElement";
import Layout from "../src/components/Layout";
import Main from "../src/pages/Main.jsx";
import FallbackSuspense from "../src/components/FallbackSuspense/index.jsx";

const DiscoverVideosPage = lazy(() =>
  import("../src/pages/DiscoverVideosPage.jsx")
);

const MovieSinglePage = lazy(() => import("../src/pages/MovieSinglePage.jsx"));

const PersonPage = lazy(() => import("../src/pages/PersonPage.jsx"));

const SearchPage = lazy(() => import("../src/pages/SearchPage.jsx"));

const NotFoundPage = lazy(() => import("../src/pages/NotFoundPage.jsx"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
          errorElement: <ErrorElement />
        },
        {
          path: "search/:query",
          element: (
            <Suspense fallback={<FallbackSuspense/>}>
              <SearchPage />
            </Suspense>
          ),
          errorElement: <ErrorElement />
        },
        {
          path: ":movieType/:id",
          element: (
            <Suspense fallback={<FallbackSuspense/>}>
              <MovieSinglePage />
            </Suspense>
          ),
          errorElement: <ErrorElement />,
        },
        {
          path: "person/:id",
          element: (
            <Suspense fallback={<FallbackSuspense/>}>
              <PersonPage />
            </Suspense>
          ),
          errorElement: <ErrorElement />
        },
        {
          path: "discover/:movieType",
          element: (
            <Suspense fallback={<FallbackSuspense/>}>
              <DiscoverVideosPage />
            </Suspense>
          ),
          errorElement: <ErrorElement />
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<FallbackSuspense/>}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
