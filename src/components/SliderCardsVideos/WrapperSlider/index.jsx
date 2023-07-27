import React from "react";

import ErrorElement from "../../ErrorElement";
import Slider from "../Slider";

import cn from "./WrapperSlider.module.scss";

const WrapperSlider = ({
  data,
  title,
  endpoint='',
  isError,
  error,
  isFetching,
  children,
}) => {

  if (isError) {
    return (
        <ErrorElement classname={"error-slider"} title={title} erro={error}/>
    );
  }

  return (
    <>
      {data?.length ? (
        <div className={cn.carousel}>
          <div className={`${cn.wrapper} wrapper`}>
            <h3 className={"title-article"}>{title}</h3>
            {children[1]}
          </div>
          <Slider endpoint={endpoint} isFetching={isFetching}>
            {children[0] || children}
          </Slider>
        </div>
      ) : null}
    </>
  );
};

export default WrapperSlider;
