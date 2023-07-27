import React from "react";

import ErrorElement from "../../ErrorElement";
import Slider from "../Slider";

import cn from "./WrapperSlider.module.scss";

const WrapperSlider = ({
  title,
  endpoint='',
  isError,
  error,
  isFetching,
  children,
}) => {



  return (
    <ErrorElement isError={isError} error={error} title={title}>
        <div className={cn.carousel}>
          <div className={`${cn.wrapper} wrapper`}>
            <h3 className="title-article">{title}</h3>
            {children[1]}
          </div>
          <Slider endpoint={endpoint} isFetching={isFetching}>
            { children[0] || children}
          </Slider>
        </div>
    </ErrorElement>
  );
};

export default WrapperSlider;
