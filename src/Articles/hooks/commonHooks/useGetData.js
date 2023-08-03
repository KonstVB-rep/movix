import { useQuery } from "react-query";
import { getData } from "../../../../utils/api.js";

export const useGetData = (value, url, key = [], config = {}) =>
  useQuery([value, key], () => getData(url), { ...config });

