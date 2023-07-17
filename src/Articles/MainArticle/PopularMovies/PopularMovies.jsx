import React from "react";

import WrapperSection from "../WrapperSection/WrapperSection.jsx";
import useGetMovies from "../hooks/useGetMovies.js";

const PopularMovies = () => {

  const {data, endpoint, isLoading, onTabChange} = useGetMovies("popular_videos",['movie', 'tv'], '', '/popular')

  return <WrapperSection title={'Popular'} endpointsList = {['Movies', 'TV Shows']} data={data?.results} loading={isLoading} endpoint={endpoint} onTabChange={onTabChange}/>;
};

export default PopularMovies;
