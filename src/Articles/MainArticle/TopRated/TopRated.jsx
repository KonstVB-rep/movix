import React  from "react";

import WrapperSection from "../WrapperSection/WrapperSection.jsx";
import useGetMovies from "../hooks/useGetMovies.js";


const TopRated = () => {

  const {data, endpoint, isLoading, onTabChange} = useGetMovies("top_movies",['movie', 'tv'], '', '/top_rated')

  return (
    <WrapperSection title={'TopRated'} endpointsList = {['Movies', 'TV Shows']} data={data?.results} loading={isLoading} endpoint={endpoint} onTabChange={onTabChange}/>
  );
};

export default TopRated;
