import React, {useEffect} from "react";

import { Content } from "./Content";
import { Banner } from "./Banner";
import cn from './HeroBanner.module.scss'
import {fetchUrl} from "../../../../store/slices/urlSlice.js";
import {useDispatch} from "react-redux";

const HeroBanner = () => {
  const dispatch =useDispatch()

  useEffect(() => {
    dispatch(fetchUrl())
  }, [])

  return (
    <div className={cn.banner}>
      <Banner />
      <div className={cn['opacity-layer']}></div>
      <div className="wrapper">
        <Content />
      </div>
    </div>
  );
};

export default HeroBanner;
