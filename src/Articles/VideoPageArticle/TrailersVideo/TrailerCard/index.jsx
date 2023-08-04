import React from 'react';

import Img from "../../../../components/Img";
import WatchTrailerButton from "../../WatchTrailerButton";

import cn from "../TrailersVideo.module.scss";

const TrailerCard = ({data}) => {

  const {id,key, name} = data;
  return (
    <li
      key={id}
      className={cn.video}
    >
      <div className={cn.video__thumbnail}>
        <Img
          src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
        />
        <WatchTrailerButton classname='play-item'/>
      </div>
      <div className={cn.video__title}>{name}</div>
    </li>
  );
};

export default TrailerCard;
