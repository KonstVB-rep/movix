import React from "react";

const arrSliderSkeleton = new Array(5).fill("skeleton");

import cn from './SkeletonVideosList.module.scss'

const SkeletonVideosList = () => {
  return (
    <div className={cn.skeletons}>
      {arrSliderSkeleton.map((skeleton, index) => (
        <div className={cn.skeletons__item} key={index}>
          <div className={`${cn.poster} skeleton`}></div>
          <div className={cn.text}>
            <div className={`${cn.title} skeleton`}></div>
            <div className={`${cn.genre} skeleton`}></div>
            <div className={`${cn.date} skeleton`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonVideosList;
