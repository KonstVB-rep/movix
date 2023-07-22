import React from "react";

const arrSliderSkeleton = new Array(10).fill("skeleton");
import cn from "../Actors.module.scss";

const Skeleton = () => {

  return (
        <div className = {cn.skeletons}>
          {arrSliderSkeleton.map((_, index) => (
            <div className = {`${cn.skeletons__item}`} key={index}>
              <div className = {`${cn.circle} skeleton`}></div>
              <div className = {`${cn.row} skeleton`}></div>
              <div className = {`${cn.row_last} skeleton`}></div>
            </div>
          ))}
        </div>
  );
};

export default Skeleton;
