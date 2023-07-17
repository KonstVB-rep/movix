import React, {useState} from 'react';
import {useGetData} from "../../../components/hooks/useGetData.js";

const useGetMovies = (key,endpoints =[], urlStart='', urlEnd='') => {

  const [endpoint, setEndpoint] = useState(endpoints[0]);

  const {data, isLoading} = useGetData(key,`/${urlStart}${endpoint}${urlEnd}`,endpoint )

  const onTabChange = (index) => {
    setEndpoint(!index ? endpoints[0] : endpoints[1]);
  };

  return {onTabChange,data,endpoint,isLoading}
};

export default useGetMovies;
