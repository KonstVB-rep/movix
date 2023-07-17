import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {fetchAllGenres} from '../../../store/slices/mainSlice.js'
import cn from './Genres.module.scss'


const Genres = ({genresMovie}) => {
  const { genres } = useSelector((state) => state.main);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllGenres())
  }, [])

  return (
    <div className={cn.genres}>
      {genresMovie?.map((id) =>
          <div key={id} className={cn.genre}>
            {genres[id]?.name}
          </div>
      )}
    </div>
  );
};

export default Genres
