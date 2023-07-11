import React from "react";
import { Outlet } from "react-router-dom";
import { HeroBanner } from "../HeroBanner";

const Layout = () => {
  return (
    <>
      {/*<Header />*/}
      <Outlet />
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
