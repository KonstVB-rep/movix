import React, {memo, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Img } from "../Img/index.jsx";
import { Rating } from "../Rating/index.jsx";
import { Genres } from "../Genres/index.jsx";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png";
import LoadingImg from "../../assets/loading.gif";
import { useSelector } from "react-redux";

import cn from "./VideoCard.module.scss";

const VideoCard = ({ data,endpoint, classname = 'slide_flex' }) => {

  const url = useSelector((state) => state.urlBaseForImages.url);

  const [poster, setPoster] = useState(LoadingImg);

  const {id,poster_path,media_type,vote_average,genre_ids,title, name,release_date,first_air_date} = data;

  useEffect(() => {
    const posterUrl = poster_path
      ? url && `${url?.poster}${poster_path}`
      : PosterFallback;
    setPoster(posterUrl);
  }, [data, url]);

  return (
    <li
      key={id}
      className={`${cn.slide} ${cn[classname]}`}
    >
      <Link to={`/${media_type || endpoint}/${id}`} className='link'/>
      <div className={cn.poster}>
        <Img src={poster} className={"poster_img"} />
        <Rating rating={vote_average?.toFixed(1)} classname='rating_slide'/>
      </div>
      <div className={cn.text}>
        <span className={cn.title}>{title || name}</span>
        <Genres genresMovie={genre_ids?.slice(0, 2)} classname='genres_slide'/>
        <span className={cn.date}>
          {dayjs(release_date || first_air_date).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </li>
  );
};

export default memo(VideoCard);
