import React from "react";
import Slider from "../components/Slider/index.jsx";

const withSlider = (Component) => (props) => {
  const { endpoint = "", title, onTabChange, tabsNames = [], data } = props;
  const sliderProps = { endpoint, title, onTabChange, tabsNames, data };

  return (
    <Slider {...sliderProps}>
      <Component {...props} />
    </Slider>
  );
};
export default withSlider;
