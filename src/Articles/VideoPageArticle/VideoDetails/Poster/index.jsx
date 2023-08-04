import React, { memo } from "react";
import { useSelector } from "react-redux";

import PosterFallback from "../../../../assets/no-poster.webp";
import Img from "../../../../components/Img";

import cn from "./Poster.module.scss";

const Poster = memo(({ poster }) => {
  Poster.displayName = "Poster";

  const urlBackdrop = useSelector(
    (state) => state.urlBaseForImages.url?.backdrop
  );
  return (
    <div className={cn.poster}>
      {poster ? (
        <Img className={cn.poster__img} src={urlBackdrop + poster} />
      ) : (
        <Img className={cn.poster__img} src={PosterFallback} />
      )}
    </div>
  );
});

export default Poster;
