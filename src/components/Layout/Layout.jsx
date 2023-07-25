import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../Header/index.jsx";
import { Footer } from "../Footer/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl } from "../../../store/slices/urlSlice.js";
import {fetchAllGenres} from "../../../store/slices/genresSlice.js";
import {ScrollTopBtn} from "../Buttons/ScrollTopBtn/index.jsx";
import {createPortal} from "react-dom";
import ThemeSwitch from "../Buttons/ThemeSwitch/ThemeSwitch.jsx";

const Layout = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.urlBaseForImages.loading);

  useEffect(() => {
    dispatch(fetchUrl());
    dispatch(fetchAllGenres())
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Outlet />
          <ScrollRestoration />
          {createPortal(<ScrollTopBtn/>, document.getElementById('root'), 'buttonUp')}
          {createPortal(<ThemeSwitch/>, document.getElementById('root'), 'themeSwitch')}
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Layout;
