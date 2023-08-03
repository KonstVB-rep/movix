import React from "react";
import withSkeletonBox from "../../../../hoc/withSkeletonBox.jsx";
import cn from '../TrailersVideo.module.scss'

const Skeleton = () => {

  const length = +getComputedStyle(document.querySelector(':root')).getPropertyValue("--count-skeletons-trailers");

  return (
    <div className={cn.skeletons}>
      {new Array(length).fill("skeleton").map((_, index) => (
        <div key={index} className={cn['skeleton-card']}>
          <div className= {`skeleton ${cn.thumb}`}></div>
          <div className= {`skeleton ${cn.row}`}></div>
        </div>
      ))}
    </div>
  );
};

export default withSkeletonBox(Skeleton);

