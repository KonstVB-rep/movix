import axios from "axios";
import {BASE_URL, TOKEN} from "../constants/index.js";

export const getData = async (url, params = {}) => {
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

