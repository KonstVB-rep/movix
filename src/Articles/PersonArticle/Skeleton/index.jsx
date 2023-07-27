import React from "react";
import cn from "../PersonSection.module.scss";
import Img from "../../../components/Img";
import avatar from "../../../assets/avatar.png";
import SkeletonVideosList from "../../../components/SkeletonVideosList";

const Index = () => {
  return (
    <>
      <div className={cn.profile}>
        <div className={`${cn.profile__foto} ${cn["profile__foto-skeleton"]} skeleton`}>
          <Img src={avatar} />
        </div>
        <div className={cn.profile__info}>
          {Array(6).fill('skeleton').map((_, index) =>
            <p key={index} className={`${cn["info-item"]} ${cn["info-item-skeleton"]} skeleton`}/>
          )}
          <p className={`${cn["biography-skeleton"]} skeleton`}></p>
          <p className={`${cn["info-item"]} ${cn["info-item-skeleton"]} skeleton`} ></p>
        </div>
      </div>
      <div className={`${cn["info-item"]} ${cn["info-item-skeleton"]} skeleton`}>
        <h2 className={`${cn["info-item"]} ${cn["info-item-skeleton"]} skeleton`}/>
        <div className={`${cn['switch__tab-skeleton']}`}/>
      </div>
      <div className='grid'>
        <SkeletonVideosList/>
      </div>
    </>
  );
};

export default Index;
