import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


import cn from './Genres.module.scss'
import {fetchAllGenres} from "../../../store/slices/genresSlice.js";


const Genres = ({genresMovie, classname}) => {
  const { genres } = useSelector((state) => state.genres);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllGenres())
  }, [])

  return (
    <div className={`${cn.genres} ${cn[classname]}`}>
      {genresMovie?.map((id) =>
          <div key={id} className={cn.genre}>
            {genres[id]?.name}
          </div>
      )}
    </div>
  );
};

export default Genres
