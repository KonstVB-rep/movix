import React from 'react';
import cn from "../VideoDetails.module.scss";

const Skeleton = () => {
  return (
    <div className={cn.skeleton}>
      <div className={`${cn.wrapper} wrapper`}>
        <div className={`${cn.left} skeleton`}/>
        <div className={cn.right}>
          <h1 className={`${cn.row} ${cn.title} skeleton`}/>
          <div className={`${cn.row} ${cn.genres} skeleton`}/>
          <div className={cn.group}>
            <div className={`${cn.circle} skeleton`}/>
            <div className={`${cn.circle} skeleton`}/>
          </div>
          <div className={`${cn.row} ${cn.overview} skeleton`}/>
          <div className={`${cn.row} ${cn.describe} skeleton`}/>
          <div className={`${cn.row} skeleton`}/>
          <div className={`${cn.row} ${cn.row_short} skeleton`}/>
          <div className={`${cn.row} ${cn.row_short} skeleton`}/>
          <div className={`${cn.row} ${cn.row_short} skeleton`}/>
          <div className={`${cn.row} ${cn.row_short} skeleton`}/>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
