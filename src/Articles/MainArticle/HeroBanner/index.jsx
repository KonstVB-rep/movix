import React from "react";

import Banner from "./Banner";
import Content from "./Content";
import cn from "./HeroBanner.module.scss";

const HeroBanner = () => (
      <div className={cn.banner}>
        <Banner />
        <div className={cn["opacity-layer"]}></div>
        {/*<div className="wrapper">*/}
          <Content />
        {/*</div>*/}
      </div>
  );

export default HeroBanner;
