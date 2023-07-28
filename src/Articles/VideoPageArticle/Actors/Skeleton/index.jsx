import React from "react";

import cn from "../Actors.module.scss";

const Skeleton = () => {
  const length = +getComputedStyle(document.querySelector(':root')).getPropertyValue("--count-skeletons-actors")

  return (
    <div className = {cn.skeletons}>
      {Array(length).fill("skeleton").map((_, index) => (
        <div className = {`${cn.skeletons__item}`} key = {index}>
          <div className = {`${cn.circle} skeleton`}></div>
          <div className = {`${cn.row} skeleton`}></div>
          <div className = {`${cn.row_last} skeleton`}></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
