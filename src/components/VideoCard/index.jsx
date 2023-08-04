import React,{memo, useEffect, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

import Genres from "../Genres";
import Img from "../Img";
import Rating from "../Rating";
import LoadingImg from "../../assets/loading.gif";
import PosterFallback from "../../assets/no-poster.webp";

import cn from "./VideoCard.module.scss";

const VideoCard = memo(({ data, endpoint, classnameCard = "card_flex" }) => {

  VideoCard.displayName ='VideoCard'

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

  const [poster, setPoster] = useState(LoadingImg);

  const posterUrl = useMemo(() => poster_path ? urlPoster && `${urlPoster}${poster_path}` : PosterFallback, [urlPoster,poster_path]);


  useEffect(() => {
    setPoster(posterUrl);
  }, [posterUrl,data]);

  return (
    <li key={id} className={`${cn.card} ${cn[classnameCard]}`}>
      <div className={cn.poster}>
        <Link
          className="link"
          to={`/${media_type || endpoint || movieType}/${id}`}
        />
        <Img className={"poster_img"} src={poster}/>
        <Rating classname="rating_card" rating={vote_average?.toFixed(1)} />
      </div>
      <div className={cn.text}>
        <span className={cn.title}>{title || name}</span>
        <Genres classname="genres_card" genresMovie={genre_ids?.slice(0, 2)|| []} />
        <span className={cn.date}>
          {dayjs(release_date || first_air_date).format("MMM D, YYYY")}
        </span>
      </div>
    </li>
  );
});

export default VideoCard;
