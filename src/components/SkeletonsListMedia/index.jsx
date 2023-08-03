import React from 'react';
import {getNumberSkeletons} from "../../../utils/getNumberSkeletons.js";
import withSkeletonBox from "../../hoc/withSkeletonBox.jsx";
import cn from "../SkeletonBox/SkeletonBox.module.scss";

const SkeletonsListMedia = ({classname = "skeletons__item_flex"}) => {

  const length = +getNumberSkeletons(classname);

  return (
    <>
      {Array(length)
        .fill("skeleton")
        .map((skeleton, index) => (
          <div key={index} className={`${cn.skeletons__item} ${cn[classname]}`}>
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

export default  withSkeletonBox(SkeletonsListMedia);
