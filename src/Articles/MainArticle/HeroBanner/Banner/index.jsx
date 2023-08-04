import React from "react";

import Img from "../../../../components/Img";
import useApi from "../../../hooks/commonHooks/useApi.js";

import cn from '../HeroBanner.module.scss'

const Banner = () => {
  const { isLoading, banner } = useApi().useBanner();

  return (
    <>
      {!isLoading && (
        <div className={cn.banner__img}>
          <Img src={banner} />
        </div>
      )}
    </>
  );
};

export default Banner;
