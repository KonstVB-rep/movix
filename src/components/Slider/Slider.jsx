import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import cn from "./Slider.module.scss";
import { debounce } from "../../../utils/helpers.js";

const Slider = ({ loading, isFetching, endpoint = "", children }) => {
  const sliderContainer = useRef(null);
  const sliderWrapper = useRef(null);
  const [disabledArrow, setDisabledArrow] = useState("left");
  const [visible, setVisible] = useState("false");

  const navigation = (dir) => {
    const container = sliderContainer.current;

    if (container) {

      const scrollAmount =
        dir === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);

      if (scrollAmount >= container.scrollWidth) {
        setDisabledArrow("right");
      } else if (scrollAmount <= 0) {
        setDisabledArrow("left");
      } else setDisabledArrow("");

      container.style.transform = `translateX(${scrollAmount})`;
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

    }
  };

  const debounceResize = () => {
    const { scrollWidth: sliderScrollWidth, offsetWidth: sliderOffsetWidth } =
      sliderContainer.current;
    setVisible(sliderScrollWidth > sliderOffsetWidth);
  };

  useEffect(() => {
    if (sliderContainer.current && !loading && !isFetching) {
      sliderContainer.current.scrollLeft = 0;
      debounceResize();
    }
    setDisabledArrow("left");
  }, [endpoint, loading, isFetching]);

  return (
    <div className={cn.slider}>
      <div className={`${cn.wrapper} wrapper`} ref={sliderWrapper}>
        {visible && !loading && !isFetching ? (
          <>
            <button
              onClick={() => navigation("left")}
              className={`${cn.arrow} ${cn.arrow_left}`}
              disabled={disabledArrow === "left"}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button
              className={`${cn.arrow} ${cn.arrow_right}`}
              onClick={() => navigation("right")}
              disabled={disabledArrow === "right"}
            >
              <BsFillArrowRightCircleFill />
            </button>
          </>
        ) : null}
        <div>
          <ul className={cn.slides} ref={sliderContainer}>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
