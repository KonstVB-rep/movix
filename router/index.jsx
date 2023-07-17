import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout/index.jsx";
import Main from "../src/pages/Main.jsx";
import SearchPage from "../src/pages/SearchPage.jsx";
import NotFoundPage from "../src/pages/NotFoundPage.jsx";
import MoviePage from "../src/pages/MoviePage.jsx";

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
        // {
        //   path: ":type/:id",
        //   element: <SearchPage />,
        // },
        {
          path: ":movieType/:id",
          element: <MoviePage />,
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
