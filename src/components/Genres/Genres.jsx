import React from 'react';
import {useSelector} from "react-redux";

import cn from './Genres.module.scss'
// width: 100%;
// height: 20px;
// margin-bottom: 10px;
// background-color: #434b4b;
// border-radius: 12px;


const Genres = ({genresMovie, classname}) => {
  const { genres } = useSelector((state) => state.genres);

  return (
    <>
      {genresMovie?.length ? ( <div className={`${cn.genres} ${cn[classname]}`}>
        {genresMovie?.map((id) =>
          <div key={id} className={cn.genre}>
            {genres[id]?.name}
          </div>
        )}
      </div>) : <div className={cn['genres-empty']}></div>}
    </>
  );
};

export default Genres
