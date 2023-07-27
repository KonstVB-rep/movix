import React, { useEffect, useState } from "react";
import { useGetData } from "../commonHooks/useGetData.js";
import useSwitchTabs from "../commonHooks/useSwitchTabs.js";

const useGetMovies = (value, endpoint, urlStart = "", urlEnd = "", config) => {
  const { data, isLoading, isError, error, isFetching } = useGetData(
    value,
    `/${urlStart}${endpoint}${urlEnd}`,
    endpoint,
    config
  );

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

export default useGetMovies;
