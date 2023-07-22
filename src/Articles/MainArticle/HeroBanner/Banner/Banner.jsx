import React from "react";
import { Img } from "../../../../components/Img/index.jsx";
import cn from '../HeroBanner.module.scss'
import useGetKeyData from "../../../hooks/useGetKeyData.js";

const Banner = () => {
  const { isLoading, isError, banner } = useGetKeyData().banner;

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
