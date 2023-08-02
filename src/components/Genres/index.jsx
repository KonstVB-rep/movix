import React from "react";
import { useSelector } from "react-redux";

import cn from "./Genres.module.scss";

const Genres = ({ genresMovie, classname }) => {
  const genres = useSelector((state) => state.genres.all);
  const genresNameList = String(genresMovie?.map((id) => genres[id]));

  return (
    <div title={genresNameList || ""} className={cn["genres-box"]}>
      {genresMovie?.length ? (
        <div className={`${cn.genres} ${cn[classname]}`}>
          {genresMovie?.map((id) => (
            <div key={id} className={cn.genre}>
              {genres[id]}
            </div>
          ))}
        </div>
      ) : (
        <div className={cn["genres-empty"]}></div>
      )}
    </div>
  );
};

export default Genres;
