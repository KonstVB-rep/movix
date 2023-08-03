import { useGetData } from "../commonHooks/useGetData.js";

const useGetMovies = (value, endpoint, urlStart = "", urlEnd = "", config) => {

  const { data, isError, error, status } = useGetData(
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
