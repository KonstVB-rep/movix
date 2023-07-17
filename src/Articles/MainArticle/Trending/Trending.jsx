import React  from "react";

import WrapperSection from "../WrapperSection/WrapperSection.jsx";
import useGetMovies from "../hooks/useGetMovies.js";



const Trending = () => {

  const {data, endpoint, isLoading, onTabChange} = useGetMovies("trending_movies",['day', 'week'], 'trending/movie/')

  return (
    <WrapperSection title={'Trending'} endpointsList = {['Day', 'Week']} data={data?.results} loading={isLoading} endpoint={endpoint} onTabChange={onTabChange}/>
  );
};

export default Trending;
