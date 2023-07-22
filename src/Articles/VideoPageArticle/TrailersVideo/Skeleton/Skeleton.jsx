import React from "react";
import cn from '../TrailersVideo.module.scss'

const Skeleton = () => {
  return (
    <div className={cn.skeletons}>
      {new Array(4).fill("skeleton").map((_, index) => (
        <div className={cn['skeleton-card']} key={index}>
          <div className= {`skeleton ${cn.thumb}`}></div>
          <div className= {`skeleton ${cn.row}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
