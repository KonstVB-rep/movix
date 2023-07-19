import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "../../Img/index";
import { Rating } from "../../Rating";
import { Genres } from "../../Genres/index";
import dayjs from "dayjs";
import PosterFallback from "../../../assets/no-poster.png";
import LoadingImg from "../../../assets/loading.gif";
import { useSelector } from "react-redux";

import cn from "./Slide.module.scss";
import Loader from "../../Loader/Loader.jsx";

const Slide = ({ item, endpoint }) => {
  const navigate = useNavigate();
  const url = useSelector((state) => state.urlBaseForImages.url);

  const [poster, setPoster] = useState(LoadingImg);

  useEffect(() => {
    const posterUrl = item?.poster_path
      ? url && `${url?.poster}${item.poster_path}`
      : PosterFallback;
    setPoster(posterUrl);
  }, [item, url]);

  return (
    <div
      key={item.id}
      className={cn.slide}
      onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
    >
      <div className={cn.poster}>
        <Img src={poster} className={"poster_img"} />
        <Rating rating={item.vote_average.toFixed(1)} classname='rating_slide'/>
      </div>
      <div className={cn.text}>
        <span className={cn.title}>{item.title || item.name}</span>
        <Genres genresMovie={item.genre_ids.slice(0, 2)} classname='genres_slide'/>
        <span className={cn.date}>
          {dayjs(item.release_date || item.first_air_date).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </div>
  );
};

export default Slide;
