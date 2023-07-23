import React, {useState} from 'react';
import {useGetData} from "../useGetData.js";

const useGetMovies = (value,endpoints =[], urlStart='', urlEnd='', config) => {

  const [endpoint, setEndpoint] = useState(endpoints[0]);

  const {data, isLoading, isError, error, isFetching} = useGetData(value,`/${urlStart}${endpoint}${urlEnd}`,endpoint,config )

  const onTabChange = (index) => {
    setEndpoint(!index ? endpoints[0] : endpoints[1]);
  };

  return {onTabChange,data,endpoint,isLoading,isError,error, isFetching}
};

export default useGetMovies;
