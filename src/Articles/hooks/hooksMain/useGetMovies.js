import React, { useEffect, useState } from "react";
import { useGetData } from "../commonHooks/useGetData.js";
import useSwitchTabs from "../commonHooks/useSwitchTabs.js";

const useGetMovies = (value, endpoint, urlStart = "", urlEnd = "", config) => {

  const { data, isLoading, isError, error, isFetching, status } = useGetData(
    value,
    `/${urlStart}${endpoint}${urlEnd}`,
    endpoint,
    config
  );

  return {
    data,
    isError,
    error,
    status
  };
};

export default useGetMovies;
