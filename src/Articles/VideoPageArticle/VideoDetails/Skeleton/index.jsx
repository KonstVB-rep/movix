import React from 'react';
import cn from "../VideoDetails.module.scss";

const Skeleton = () => (
    <div className={cn.skeleton}>
      <div className={cn['content-skeleton']}>
        <div className={cn['content__indicators']}>
          <div className={`${cn.left} skeleton`}/>
          <div className={cn.right}>
            <h1 className={`${cn.row} ${cn.title} skeleton`}/>
            <div className={`${cn.row} ${cn.genres} skeleton`}/>
            <div className={cn.group}>
              <div className={`${cn.circle} skeleton`}/>
              <div className={`${cn.circle} skeleton`}/>
            </div>
            <div className={`${cn.row} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
            <div className={`${cn.row} ${cn.row_short} skeleton`}/>
          </div>
        </div>
        <div className={cn.describe}>
          <div className={`${cn.row} ${cn.describe__title} skeleton`}/>
          <div className={`${cn.row} ${cn.describe__text} skeleton`}/>
        </div>
      </div>
    </div>
  );

export default Skeleton;
