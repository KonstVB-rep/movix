import React, { forwardRef, useEffect, useState } from "react";
import cn from "../../Slider/Slider.module.scss";

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
            className={`${cn.arrow} ${cn.arrow_left} ${
              hiddenArrow === "left" && cn.arrow_hidden
            }`}
            onClick={() => navigation("left")}
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
            </svg>
          </button>
          <button
            className={`${cn.arrow} ${cn.arrow_right} ${
              hiddenArrow === "right" && cn.arrow_hidden
            }`}
            onClick={() => navigation("right")}
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm150.6 278.6L303.5 381.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128c-17.7 0-32-14.3-32-32s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256c0 4.9-1.4 14.7-9.4 22.6z" />
            </svg>
          </button>
        </>
      ) : null}
    </>
  );
});

export default ButtonsDirectionSlider;
