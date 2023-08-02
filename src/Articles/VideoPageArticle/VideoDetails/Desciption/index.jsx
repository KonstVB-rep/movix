import React, {memo, useMemo} from "react";
import cn from "../VideoDetails.module.scss";
import Title from "../Title";
import Genres from "../../../../components/Genres";
import Rating from "../../../../components/Rating";
import WatchTrailerButton from "../../WatchTrailerButton";
import About from "../About";

const Description = memo(({ data }) => {
  const {
    homepage,
    name,
    title,
    genres,
    release_date,
    tagline,
    vote_average,
    overview,
  } = data;

  const genresList = genres?.map((genre) => genre.id);

  return (
    <>
      {data && (
        <div className={cn.describe}>
          <Title
            link={homepage}
            title={name || title}
            date={release_date}
            subTitle={tagline}
          />
          <Genres genresMovie={genresList} classname="genres_single-movie" />
          <div className={cn.row}>
            <Rating
              rating={vote_average.toFixed(1)}
              classname="rating_single-movie"
            />
            <WatchTrailerButton classname="play" />
          </div>
          {/*<div className={cn.overview}>*/}
          {/*  <div className={cn.heading}>Overview</div>*/}
          {/*  <div className={cn.description}>{overview}</div>*/}
          {/*</div>*/}
          <About />
        </div>
      )}
    </>
  );
});

export default Description;
