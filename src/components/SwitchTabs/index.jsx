import React, { useState } from "react";

import cn from "./SwitchTabs.module.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [select, setSelect] = useState(0);

  function handleChange(e) {
    const value = Number(e.target.value);
    setSelect(value);
    onTabChange(value);
  }

  return (
    <div className={cn.tab}>
      <div className={cn.tab__wrapper}>
        {data.map((tab, index) => (
          <label
            key={tab}
            className={`${cn.tab__label} ${select === index ? cn.active : ""}`}
          >
            <input
              checked={select === index}
              className={cn.tab__radio}
              name={tab}
              type="radio"
              value={index}
              onChange={handleChange}
            />
            <span className={cn["tab__label-span"]}>{tab}</span>
          </label>
        ))}
        <span
          className={`${cn.slider} ${
            !select ? cn.slider_left : cn.slider_right
          }`}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
