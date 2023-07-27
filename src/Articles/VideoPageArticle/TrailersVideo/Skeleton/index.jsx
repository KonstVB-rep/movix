import React from "react";
import cn from '../TrailersVideo.module.scss'

const Skeleton = ({data}) => {
  const length = Math.min(data?.length, 4) || 4
  return (
    <div className={cn.skeletons}>
      {new Array(length).fill("skeleton").map((_, index) => (
        <div className={cn['skeleton-card']} key={index}>
          <div className= {`skeleton ${cn.thumb}`}></div>
          <div className= {`skeleton ${cn.row}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;

