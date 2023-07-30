import React from "react";

import Content from "./Content";
import Banner from "./Banner";
import cn from "./HeroBanner.module.scss";

const HeroBanner = () => {
  return (
      <div className={cn.banner}>
        <Banner />
        <div className={cn["opacity-layer"]}></div>
        {/*<div className="wrapper">*/}
          <Content />
        {/*</div>*/}
      </div>
  );
};

export default HeroBanner;
