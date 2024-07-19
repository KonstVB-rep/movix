import React from "react";
import Slider from "../components/Slider/index.jsx";

const withSlider = (Component) => (props) => {
  const {
    endpoint = "",
    title,
    onTabChange,
    tabsNames = [],
    data,
    classList,
  } = props;
  const sliderProps = {
    endpoint,
    title,
    onTabChange,
    tabsNames,
    data,
    classList,
  };

  return (
    <Slider {...sliderProps}>
      <Component {...props} />
    </Slider>
  );
};
export default withSlider;
