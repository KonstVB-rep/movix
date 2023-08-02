import React, { useEffect, useRef, useState } from "react";

import cn from "./Slider.module.scss";
import { useParams } from "react-router-dom";
import SwitchTabs from "../SwitchTabs/index.jsx";
import ButtonsDirectionSlider from "../Buttons/ButtonsDirectionSlider";

const Slider = ({
  endpoint = "",
  title,
  onTabChange,
  tabsNames = [],
  data,
  children,
}) => {
  const { id } = useParams();

  const sliderContainer = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sliderContainer.current) {
      sliderContainer.current.scrollLeft = 0;
    }
    const obj = sliderContainer?.current?.getBoundingClientRect();
    setVisible(sliderContainer?.current?.scrollWidth > obj?.width);
  }, [endpoint, visible, id, data]);

  return (
    <>
      {data?.length ? (
        <div className={cn["slider-box"]}>
          <div className={`${cn.heading} wrapper`}>
            <h3 className="title-article">{title}</h3>
            {tabsNames.length ? (
              <SwitchTabs data={tabsNames} onTabChange={onTabChange} />
            ) : null}
          </div>
          <div className={cn.slider}>
            <div className={`${cn.wrapper} wrapper`}>
              <ButtonsDirectionSlider visible={visible} ref={sliderContainer} />
              <ul className={cn.slides} ref={sliderContainer}>
                {children}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Slider;
