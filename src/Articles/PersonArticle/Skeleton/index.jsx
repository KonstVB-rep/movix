import React from "react";

import cn from "../PersonSection.module.scss";

const Skeleton = () => (
    <>
      <div className={cn.profile__content}>
        <div className={`${cn.profile__content__photo} skeleton`}/>
        <div className={`${cn.profile__content__info} ${cn["profile__content__info_skeleton"]}`}>
          {Array(6).fill('skeleton').map((_, index) =>
            <p key={index} className={`${cn["info-item"]} ${cn["info-item_skeleton"]} skeleton`}/>
          )}
          <p className={`${cn["biography_skeleton"]} skeleton`}></p>
          <p className={`${cn["info-item"]} ${cn["info-item_skeleton"]} skeleton`} ></p>
        </div>
      </div>
      <div className={cn['btn__group-skeleton']}>
        <div className={`${cn['btn__sort-skeleton']} skeleton`}/>
        <div className={`${cn['btn__sort-skeleton']} skeleton`}/>
        <div className={`${cn['btn__sort-skeleton']} skeleton`}/>
        <div className={`${cn['btn__sort-skeleton']} skeleton`}/>
      </div>
    </>
  );

export default Skeleton;
