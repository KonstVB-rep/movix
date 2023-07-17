import React from "react";
import { Outlet } from "react-router-dom";
import { HeroBanner } from "../../Articles/MainArticle/HeroBanner/index.jsx";
import { Header } from "../Header/index.jsx";
import { Footer } from "../Footer/index.jsx";
import MyHeader from "../Header/Header.jsx";

const Layout = () => {
  return (
    <>
      {/*<Header />*/}
      <MyHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
