import React, {memo} from "react";

import Genres from "../../../../components/Genres";
import Rating from "../../../../components/Rating";
import WatchTrailerButton from "../../WatchTrailerButton";
import About from "../About";
import Title from "../Title";

import cn from "../VideoDetails.module.scss";

const Description = memo(({ data }) => {
  const {
    homepage,
    name,
    title,
    genres,
    release_date,
    tagline,
    vote_average,
  } = data;

  const genresList = genres?.map((genre) => genre.id);

  return (
    <>
      {data && (
        <div className={cn.describe}>
          <Title
            date={release_date}
            link={homepage}
            subTitle={tagline}
            title={name || title}
          />
          <Genres classname="genres_single-movie" genresMovie={genresList} />
          <div className={cn.row}>
            <Rating
              classname="rating_single-movie"
              rating={vote_average.toFixed(1)}
            />
            <WatchTrailerButton classname="play" />
          </div>
          <About />
        </div>
      )}
    </>
  );
});

export default Description;
