import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// type FetchData = {
//   url: string;
//   params?: {};
// };

export const fetchDataFromApi = async (
  url: string,
  params: {} = {}
): Promise<any> => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getData = async (url: string, params: {} = {}): Promise<any> => {
  const options = {
    method: "GET",
    url: BASE_URL + url,
    params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const response = await axios.request(options);
  return response.data;
};

export const getParamsImages = async () => {
  const data = await getData("/configuration");
  if (data) {
    return {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
  }
};
