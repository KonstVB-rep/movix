import React, { useEffect } from "react";
import {createPortal} from "react-dom";
import { useDispatch, } from "react-redux";
import { Outlet, ScrollRestoration } from "react-router-dom";

import {fetchAllGenres} from "../../../store/slices/genresSlice.js";
import { fetchUrl } from "../../../store/slices/urlSlice.js";
import ScrollTopBtn from "../Buttons/ScrollTopBtn";
import ThemeSwitch from "../Buttons/ThemeSwitch";
import Footer from "../Footer";
import Header from "../Header";


const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrl());
    dispatch(fetchAllGenres());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <Outlet />
      <ScrollRestoration />
      {createPortal(
        <ScrollTopBtn />,
        document.getElementById("root"),
        "buttonUp"
      )}
      {createPortal(
        <ThemeSwitch />,
        document.getElementById("root"),
        "themeSwitch"
      )}
      <Footer />
    </>
  );
};

export default Layout;
