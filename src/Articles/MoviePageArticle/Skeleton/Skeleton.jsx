import React from 'react';
import cn from "../MovieDetails/MovieDetails.module.scss";

const Skeleton = () => {
  return (
    <div className={cn.skeleton}>
      <div className={`${cn.wrapper} wrapper`}>
        <div className={`${cn.left} skeleton`}></div>
        <div className={cn.right}>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
          <div className={`${cn.row} skeleton`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
