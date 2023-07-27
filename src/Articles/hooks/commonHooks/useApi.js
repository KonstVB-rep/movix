import React from 'react';

import {useGetData} from "./useGetData.js";
import useGetMovies from "../hooksMain/useGetMovies.js";
import useGetBanner from "../hooksMain/useGetBanner.js";
import useGetEmployeeCrew from "../hooksMoviePage/useGetEmployeeCrew.js";
import useGetVideosSearchByQuery from "../hooksSearchPage/index.js";
import useGetDataInfinity from "./useGetDataInfinity.js";

const useApi = () => {
  return {
    "topRated"             : (endpoint) => useGetMovies("top_movies", endpoint, "", "/top_rated",{enabled: !!endpoint}),
    'trending'             : (endpoint) => useGetMovies("trending_movies", endpoint, "trending/movie/","",{enabled: !!endpoint}),
    'popular'              : (endpoint) => useGetMovies("popular_videos", endpoint, "", "/popular",{enabled: !!endpoint}),
    'banner'               : useGetBanner(),
    'movie_details'        : (movieType,id) => useGetData(movieType, `/${movieType}/${id}`, id,{enabled: !!(movieType && id)}),
    'crew'                 : (movieType,id) =>useGetEmployeeCrew(movieType,id),
    'person'               : (id) =>  useGetData('person',`/person/${id}`,id ),
    'trailers_list'        : (movieType,id) => useGetData('trailers_list', `/${movieType}/${id}/videos`, id,{enabled: !!(movieType && id)}),
    'similar'              : (movieType,id) => useGetData('similar', `/${movieType}/${id}/similar`, id,{enabled: !!(movieType && id)}),
    'recommendations'      : (movieType,id) => useGetData('recommendations', `/${movieType}/${id}/recommendations`, id, {enabled: !!(movieType && id)}),
    'video_credits_person' : (id, endpoint) =>  useGetData('movie_credits_person',`/person/${id}/${endpoint}_credits`,[endpoint,id],{enabled: !!(endpoint && id)} ),
    'discover'             : (url,queryParams,name_request, key) => useGetDataInfinity(url, queryParams,name_request, key),
    'search_query'         : (url,queryParams,name_request, key) => useGetDataInfinity(url, queryParams,name_request, key),
  }
};

export default useApi;
