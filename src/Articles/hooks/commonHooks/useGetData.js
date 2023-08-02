import { getData } from "../../../../utils/api.js";
import { useQuery } from "react-query";

import axios from "axios";
import {queryClient} from "../../../App.jsx";

export const useGetData = (value, url, key = [], config = {}) =>
  useQuery([value, key], () => getData(url), { ...config });

