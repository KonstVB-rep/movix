import React from "react";

import { ErrorElement } from "../ErrorElement/index.jsx";
import { Slider } from "../Slider/index.jsx";

import cn from "./WrapperSlider.module.scss";

const WrapperSlider = ({
  data,
  title,
  endpoint,
  isError,
  error,
  children,
  isFetching,
}) => {

  if (isError) {
    return (
      <div className={cn.carousel}>
        <div className={`${cn.wrapper} wrapper ${cn.wrapper_error}`}>
          <h3 className= {'title-article'}>{title}</h3>
          <ErrorElement classname={"error-slider"}>
            <span>{error?.message}</span>
          </ErrorElement>
        </div>
      </div>
    );
  }

  return (
    <>
      {data?.length ? (
        <div className={cn.carousel}>
          <div className={`${cn.wrapper} wrapper`}>
            <h3 className= {'title-article'}>{title}</h3>
            {children[1]}
          </div>
          <Slider endpoint={endpoint}
                  isFetching={isFetching} >
            {children[0] || children}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default WrapperSlider;
