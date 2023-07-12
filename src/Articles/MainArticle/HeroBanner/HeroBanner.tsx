import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/redux-hook";
import { getParamsImages } from "../../../../utils/api";

import "./styles.scss";
import { Content } from "./Content";
import { Banner } from "./Banner";
import { getApiConfiguration } from "../../../../store/slices/mainSlice";

const HeroBanner = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getParamsImages().then((url) => dispatch(getApiConfiguration(url)));
  }, []);

  return (
    <div className="banner">
      <Banner />
      <div className="banner__opacity-layer"></div>
      <div className="wrapper">
        <Content />
      </div>
    </div>
  );
};

export default HeroBanner;
