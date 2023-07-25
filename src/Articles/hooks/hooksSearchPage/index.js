import React, {useMemo} from 'react';
import {getData} from "../../../../utils/api.js";
import {useInfiniteQuery} from "react-query";

const useGetVideosSearchByQuery= (query) => {
  const getSearchByQuery = ({ pageParam = 1 }) =>
    getData(`/search/multi?query=${query}&page=${pageParam}`);

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError
  } = useInfiniteQuery(["search_query", query], getSearchByQuery, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
  });

  const videos = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );

  const total_results = data?.pages[0]?.total_results;
  const dataPages = data?.pages

  return {videos,error, isError, isLoading, fetchNextPage, hasNextPage, total_results,dataPages}
};

export default useGetVideosSearchByQuery;
