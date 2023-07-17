import React from "react";
import { Img } from "../../../../components/Img/index.jsx";
import useGetBanner from "../../hooks/useGetBanner.js";

import cn from '../HeroBanner.module.scss'
import {useSelector} from "react-redux";

const Banner = () => {
  const { data, isLoading, isError, error, banner } = useGetBanner();

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
