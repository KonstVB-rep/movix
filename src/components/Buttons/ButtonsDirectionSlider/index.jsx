import React, { forwardRef, useEffect, useState } from "react";
import cn from "../../Slider/Slider.module.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const ButtonsDirectionSlider = forwardRef(({ visible }, ref) => {
  const [hiddenArrow, setHiddenArrow] = useState("left");

  const navigation = (dir) => {
    const container = ref?.current;

    if (container) {
      const scrollAmount =
        dir === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);

      if (scrollAmount + container.offsetWidth + 20 >= container.scrollWidth) {
        setHiddenArrow("right");
      } else if (scrollAmount <= 0) {
        setHiddenArrow("left");
      } else setHiddenArrow("");

      container.style.transform = `translateX(${scrollAmount})`;
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setHiddenArrow("left");
  }, [visible]);

  return (
    <>
      {visible ? (
        <>
          <button
            onClick={() => navigation("left")}
            className={`${cn.arrow} ${cn.arrow_left} ${
              hiddenArrow === "left" && cn.arrow_hidden
            }`}
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            className={`${cn.arrow} ${cn.arrow_right} ${
              hiddenArrow === "right" && cn.arrow_hidden
            }`}
            onClick={() => navigation("right")}
          >
            <BsFillArrowRightCircleFill />
          </button>
        </>
      ) : null}
    </>
  );
});

export default ButtonsDirectionSlider;
