import React from "react";

import cn from '../HeroBanner.module.scss'
import useApi from "../../../hooks/commonHooks/useApi.js";
import Img from "../../../../components/Img";

const Banner = () => {
  const { isLoading, isError, banner } = useApi().banner;

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
