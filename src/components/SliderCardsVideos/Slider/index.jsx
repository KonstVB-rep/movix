import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import cn from "./Slider.module.scss";
import { useParams } from "react-router-dom";

const isVisibleArrowsDir = (ref, fn) => {
  const { scrollWidth: sliderScrollWidth, offsetWidth: sliderOffsetWidth } =
    ref;
  fn(sliderScrollWidth > sliderOffsetWidth);
};

const Slider = ({ isFetching, endpoint = "", children }) => {
  const { id } = useParams();

  const sliderContainer = useRef(null);
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

  useEffect(() => {
    if (sliderContainer.current && !isFetching) {
      sliderContainer.current.scrollLeft = 0;
    }
    isVisibleArrowsDir(sliderContainer.current, setVisible);
    setDisabledArrow("left");
  }, [endpoint, isFetching, id]);

  return (
    <div className={cn.slider}>
      <div className={`${cn.wrapper} wrapper`}>
        {visible && !isFetching ? (
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

