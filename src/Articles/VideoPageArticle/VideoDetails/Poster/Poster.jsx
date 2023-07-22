import React from 'react';
import {Img} from "../../../../components/Img/index.jsx";
import PosterFallback from "../../../../assets/no-poster.png";
import cn from './Poster.module.scss'
import {useSelector} from "react-redux";

const Poster = ({poster}) => {
  const url = useSelector((state) => state.urlBaseForImages.url);
  return (
    <div className={cn.poster}>
      {poster ? (
        <Img
          className={cn.poster__img}
          src={url?.backdrop + poster}
        />
      ) : (
        <Img className={cn.poster__img} src={PosterFallback} />
      )}
    </div>
  );
};

export default Poster;
