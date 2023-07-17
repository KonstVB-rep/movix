import axios from "axios";
// import { DataMovies } from "../types/movies";
// import { useQuery } from "react-query";
// import { getApiConfiguration } from "../store/slices/mainSlice";




const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;


// const dispatch = useDispatch();

// type FetchData = {
//   url: string;
//   params?: {};
// };

// export const fetchDataFromApi = async (
//   url: string,
//   params?: {obj: IParams}
// ): Promise<any> => {
//   try {
//     const response = await axios.get(BASE_URL + url, {
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${TOKEN}`,
//       },
//       params,
//     });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

export const getData = async (url, params={}) => {
  const options = {
    method: "GET",
    url: BASE_URL + url,
    params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

// export const getParamsImages = async () => {
//   const data = await getData("/configuration");
//   if (data) {
//     return {
//       backdrop: data.images.secure_base_url + "original",
//       poster: data.images.secure_base_url + "original",
//       profile: data.images.secure_base_url + "original",
//     };
//   }
// };
