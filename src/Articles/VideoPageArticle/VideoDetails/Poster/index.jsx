import React from 'react';
import Img from "../../../../components/Img";
import PosterFallback from "../../../../assets/no-poster.jpg";
import cn from './Poster.module.scss'
import {useSelector} from "react-redux";

const Poster = ({poster, backdrop}) => {
  const urlBackdrop = useSelector((state) => state.urlBaseForImages.url?.backdrop);
  return (
    <div className={`${cn.poster} ${backdrop && cn.poster_backdrop}`}>
      {poster ? (
        <Img
          className={cn.poster__img}
          src={urlBackdrop + poster}
        />
      ) : (
        <Img className={cn.poster__img} src={PosterFallback} />
      )}
    </div>
  );
};

export default Poster;
