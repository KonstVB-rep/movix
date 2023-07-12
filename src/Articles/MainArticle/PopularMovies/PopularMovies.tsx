import React, { useState } from "react";
import { getData } from "../../../../utils/api";
import { useQuery } from "react-query";
import { DataMovies, Movie } from "../../../../types/movies";

const PopularMovies = () => {
  const [videos, setVideos] = useState<Movie[] | []>([]);

  const { data, isLoading, isError, error } = useQuery(
    ["movies"],
    async () => {
      return getData("/movie/popular");
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      cacheTime: 10000,
      onSettled: (data: DataMovies) => {
        if (data) {
          setVideos(data.results);
        }
      },
    }
  );

  return <div></div>;
};

export default PopularMovies;
