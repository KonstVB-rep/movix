import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import ButtonsDirectionSlider from "../Buttons/ButtonsDirectionSlider";
import SwitchTabs from "../SwitchTabs/index.jsx";
import cn from "./Slider.module.scss";

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
              <ButtonsDirectionSlider ref={sliderContainer} visible={visible} />
              <ul ref={sliderContainer} className={cn.slides}>
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
