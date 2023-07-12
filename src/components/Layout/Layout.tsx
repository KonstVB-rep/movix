import React from "react";
import { Outlet } from "react-router-dom";
import { HeroBanner } from "../../Articles/MainArticle/HeroBanner";
import { Header } from "../Header";
import { Footer } from "../Footer";
import MyHeader from "../Header/MyHeader";

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
