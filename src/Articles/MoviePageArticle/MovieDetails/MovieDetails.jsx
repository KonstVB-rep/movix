import React from "react";
import { useParams } from "react-router-dom";

import { Img } from "../../../components/Img";
import { useSelector } from "react-redux";

import { Rating } from "../../../components/Rating";

import cn from "./MovieDetails.module.scss";
import Poster from "./Poster/Poster.jsx";
import { useGetData } from "../../../components/hooks/useGetData.js";

import useGetEmployeeCrew from "../hooks/useGetEmployeeCrew.js";
import About from "./About/About.jsx";
import { WatchTrailerButton } from "../WatchTrailerButton";

import { Genres } from "../../../components/Genres/index.jsx";
import {Skeleton} from "../Skeleton/index.jsx";
import Title from "./Title/Title.jsx";

const MovieDetails = () => {
  const { movieType, id } = useParams();

  const url = useSelector((state) => state.urlBaseForImages.url);

  const obj = useGetData("movie_info", `/${movieType}/${id}`, id);
  const { data, isLoading } = obj;
  const {
    writers,
    director,
    isLoading: loadingCrew,
    isError,
  } = useGetEmployeeCrew(movieType, id);

  const genres = data?.genres?.map((genre) => genre.id);

  return (
    <div className={cn.details}>
      {isLoading && <Skeleton/>}
      <>
        {data && (
          <>
            <div className={cn.backdrop}>
              <Img src={url.backdrop + data.backdrop_path} />
            </div>
            <div className={cn["opacity-layer"]}></div>
            <div className={`${cn.wrapper} wrapper`}>
              <div className={cn.content}>
                <Poster poster={data.poster_path} />
                <div className={cn.about}>
                  <Title title={data.name || data.title} date={data?.release_date} subTitle={data.tagline}/>
                  <Genres genresMovie={genres} classname="genres_single-movie" />
                  <div className={cn.row}>
                    <Rating rating={data.vote_average.toFixed(1)} classname="rating_single-movie" />
                    <WatchTrailerButton />
                  </div>
                  <div className={cn.overview}>
                    <div className={cn.heading}>Overview</div>
                    <div className={cn.description}>{data.overview}</div>
                  </div>
                  <About movieDetails={{ ...data, director, writers }} />
                </div>
              </div>
            </div>
          </>
        )}
      </>
      )}
    </div>
  );
};

export default MovieDetails;
