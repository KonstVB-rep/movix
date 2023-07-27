import { getData } from "../../../../utils/api.js";
import { useQuery } from "react-query";

import axios from "axios";

export const useGetData = (value, url, key = [], config = {}) =>
  useQuery([value, key], () => getData(url), { ...config });
