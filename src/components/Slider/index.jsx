import React from "react";

import SwitchTabs from "../SwitchTabs";

import cn from "./Slider.module.scss";

const Slider = ({ title, onTabChange, tabsNames = [], data, children }) => (
  <>
    {data?.length ? (
      <div className={cn["slider-box"]}>
        <div className={`${cn.heading} wrapper`}>
          <h3 className="title-article">{title}</h3>
          {tabsNames.length ? (
            <SwitchTabs data={tabsNames} onTabChange={onTabChange} />
          ) : null}
        </div>
        <div className={`${cn.slider} slider-scroll`}>
          <div className={`${cn.wrapper} wrapper`}>{children}</div>
        </div>
      </div>
    ) : null}
  </>
);

export default Slider;
