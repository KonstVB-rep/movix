import React, { useState } from "react";
import { getData } from "../../../../utils/api";
import { DataMoviesRangeDate } from "../../../../types/movies";
import { useQuery } from "react-query";
import { useAppSelector } from "../../../../hooks/redux-hook";

const useGetUpcomingMovies = () => {
  const [banner, setBanner] = useState<string | undefined>("");

  const url = useAppSelector((state) => state.main.url);

  const { data, isLoading, isError, error } = useQuery(
    ["movies_upcoming"],
    async () => {
      return getData("/movie/upcoming");
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 10000,
      // cacheTime: 10000,
      onSettled: (data: DataMoviesRangeDate | undefined) => {
        if (data) {
          const img =
            url.backdrop +
            data.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
          setBanner(img);
        }
      },
    }
  );

  return { banner, data, isLoading, isError, error };
};

export default useGetUpcomingMovies;
