import React from "react";

import cn from './SkeletonVideosList.module.scss'

const SkeletonVideosList = ({classname='skeletons__item_flex',countSkeleton = 4}) => {

  return (
    <>
      {new Array(countSkeleton).fill("skeleton").map((skeleton, index) => (
        <div className={`${cn.skeletons__item} ${cn[classname]}`} key={index}>
          <div className={`${cn.poster} skeleton`}></div>
          <div className={cn.text}>
            <div className={`${cn.title} skeleton`}></div>
            <div className={`${cn.genre} skeleton`}></div>
            <div className={`${cn.date} skeleton`}></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonVideosList;
