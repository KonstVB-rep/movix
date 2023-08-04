import React from "react";

import withSkeletonBox from "../../../../hoc/withSkeletonBox.jsx";

import cn from "../Actors.module.scss";

const Skeleton = () => {
  const length = +getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--count-skeletons-actors");

  return (
    <>
      {Array(length)
        .fill("skeleton")
        .map((_, index) => (
          <div key={index} className={`${cn.skeletons__item}`}>
            <div className={`${cn.circle} skeleton`}></div>
            <div className={`${cn.row} skeleton`}></div>
            <div className={`${cn.row_last} skeleton`}></div>
          </div>
        ))}
    </>
  );
};

export default withSkeletonBox(Skeleton);
