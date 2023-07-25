import React from 'react';

import {useGetData} from "./useGetData.js";
import useGetMovies from "../hooksMain/useGetMovies.js";
import useGetBanner from "../hooksMain/useGetBanner.js";
import useGetEmployeeCrew from "../hooksMoviePage/useGetEmployeeCrew.js";
import useGetVideosSearchByQuery from "../hooksSearchPage/index.js";

const useGetKeyData = () => {
  return {
    "topRated"       : useGetMovies("top_movies", ["movie", "tv"], "", "/top_rated"),
    'trending'       : useGetMovies("trending_movies", ["day", "week"], "trending/movie/"),
    'popular'        : useGetMovies("popular_videos", ["movie", "tv"], "", "/popular"),
    'banner'         : useGetBanner(),
    'movie_details'  : (movieType,id) => useGetData(movieType, `/${movieType}/${id}`, id),
    'crew'           : (movieType,id) =>useGetEmployeeCrew(movieType,id),
    'person'         : (id) =>  useGetData('person',`/person/${id}`,id ),
    'trailers_list'  : (movieType,id) => useGetData('trailers_list', `/${movieType}/${id}/videos`, id),
    'similar'        : (movieType,id) => useGetData('similar', `/${movieType}/${id}/similar`, id),
    'recommendations': (movieType,id) => useGetData('recommendations', `/${movieType}/${id}/recommendations`, id),
    'search_query'    : (query) => useGetVideosSearchByQuery(query),
  }
};

export default useGetKeyData;
