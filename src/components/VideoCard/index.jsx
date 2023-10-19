import React, { memo, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

import Genres from "../Genres";
import Rating from "../Rating";
import PosterFallback from "../../assets/no-poster.webp";

import cn from "./VideoCard.module.scss";

const VideoCard = memo(({ data, endpoint, classnameCard = "card_flex" }) => {
  VideoCard.displayName = "VideoCard";

  const ref = useRef(null);

  const { movieType } = useParams();

  const {
    id,
    poster_path,
    media_type,
    vote_average,
    genre_ids,
    title,
    name,
    release_date,
    first_air_date,
  } = data;

  const urlPoster = useSelector((state) => state.urlBaseForImages.url?.poster);

  const posterUrl = poster_path
    ? urlPoster && `${urlPoster}${poster_path}`
    : PosterFallback;

  return (
    <li key={id} className={`${cn.card} ${cn[classnameCard]}`}>
      <div className={cn.poster}>
        <div className={cn.poster__img}>
          <Link
            className="link"
            to={`/${media_type || endpoint || movieType}/${id}`}
          />
          <img
            ref={ref}
            className={cn.img}
            src={posterUrl}
            loading={"lazy"}
            alt="Movie banner"
            onLoad={() => (ref.current.className = `${cn.scaleImg}`)}
          />
        </div>
        <Rating classname="rating_card" rating={vote_average?.toFixed(1)} />
      </div>
      <div className={cn.text}>
        <span className={cn.title}>{title || name}</span>
        <Genres
          classname="genres_card"
          genresMovie={genre_ids?.slice(0, 2) || []}
        />
        <span className={cn.date}>
          {dayjs(release_date || first_air_date).format("MMM D, YYYY")}
        </span>
      </div>
    </li>
  );
});

export default VideoCard;
