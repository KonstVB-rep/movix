import React, { memo, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Genres from "../Genres";
import Rating from "../Rating";
import PosterFallback from "../../assets/no-poster.webp";

import cn from "./VideoCard.module.scss";

const VideoCard = memo(
  ({ data, endpoint, style, classnameCard = "card_flex" }) => {
    VideoCard.displayName = "VideoCard";

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

    const urlPoster = useSelector(
      (state) => state.urlBaseForImages.url?.poster
    );

    const ref = useRef(null);

    const posterUrl = poster_path
      ? urlPoster && `${urlPoster}${poster_path}`
      : PosterFallback;

    return (
      <li key={id} className={`${cn.card} ${cn[classnameCard]}`} style={style}>
        <div className={cn.poster}>
          <div
            className={cn.poster__img}
            ref={ref}
            style={{
              background: `url(${posterUrl}) center center / cover no-repeat`,
            }}
          >
            <Link
              className="link"
              to={`/${media_type || endpoint || movieType}/${id}`}
            />

            <LazyLoadImage
              effect="blur"
              className={cn.img}
              src={posterUrl}
              alt="Movie banner"
              onLoad={() => (ref.current.className += " " + cn.poster_loaded)}
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
  }
);

export default VideoCard;
