import React, {useState} from "react";

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
            className={`${cn.tab__label} ${select === index ? cn.active : ""}`}
            key={tab}
          >
            <input
              type="radio"
              name={tab}
              value={index}
              className={cn.tab__radio}
              onChange={handleChange}
              checked={select === index}
            />
            <span className={cn['tab__label-span']}>{tab}</span>
          </label>
        ))}
        <span className={`${cn.slider} ${!select ? cn.slider_left : cn.slider_right}`}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
