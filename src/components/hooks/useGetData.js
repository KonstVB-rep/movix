import { getData } from "../../../utils/api.js";
import { useQuery } from "react-query";

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// export const useGetPopularMovies = (cb: (results: Movie[]) => void) =>
//   useQuery(
//     ["popular_movies"],
//     async () => {
//       return getData("/movie/popular");
//     },
//     {
//       // refetchOnWindowFocus: false,
//       staleTime: 10000,
//       cacheTime: 10000,
//       onSettled: (data: DataMovies) => {
//         if (data) {
//           cb(data.results);
//         }
//       },
//     }
//   );

export const useGetData = (key, url, value='', option) =>
  useQuery(
    [key, value],
    async () => {
      return getData(url);
    },
    {
      refetchOnWindowFocus: false,
      // staleTime: 10000,
      cacheTime: 10000,
      ...option
    }
  );
