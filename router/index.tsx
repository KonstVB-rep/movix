import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../src/components/Layout";
import Main from "../src/pages/Main";
import SearchPage from "../src/pages/SearchPage";
import NotFoundPage from "../src/pages/NotFoundPage";

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
          path: ":type/:id",
          element: <SearchPage />,
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
          path: "/*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]
  // {
  //   basename: "/",
  // }
);
