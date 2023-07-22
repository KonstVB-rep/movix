import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../Header/index.jsx";
import { Footer } from "../Footer/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../../../store/slices/urlSlice.js";

const Layout = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.urlBaseForImages);

  useEffect(() => {
    dispatch(fetchUrl());
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Layout;
