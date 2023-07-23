import React from "react";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { getData } from "../../../utils/api.js";
import {VideoCard} from "../../components/VideoCard/index.jsx";
import cn from './SearchPageArticle.module.scss'

const SearchPageArticle = () => {
  const { query } = useParams();

  const fetchProjects = ({ pageParam = 1 }) =>
    getData(`/search/multi?query=${query}&page=${pageParam}`);

  const {
    data,
    error,
    isLoading,
    loading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["search_query",query], fetchProjects, {
    getNextPageParam: (lastPage) => lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
  });

  // const renderList = () => {
  //   if (data?.pages) {
  //     return data?.pages.map((page) =>
  //       page?.results.map((item) => {
  //         return <VideoCard key={item.id} data={item}/>;
  //       })
  //     );
  //   }
  // };

  return (
    <section className={cn['search-section']}>
      <h1 className= {'title-article'}>Search results</h1>

      <ul className={cn.list}>
        {data?.pages.map((page) =>
          page?.results.map((item) => {
            return <VideoCard key={item.id} data={item} classname='slide_grid'/>;
          })
        )}
        {/*{data?.pages &&*/}
        {/*  data?.pages.map(page => {*/}
        {/*    page?.results.map(item => <li key={item.id}>{item.title}</li>*/}
        {/*    )*/}
        {/*  })*/}
        {/*}*/}
      </ul>
      {isFetching ? (
        <p style={{ color: "white", fontSize: "30px" }}>Loading...</p>
      ) : null}
      {hasNextPage && (
        <button
          style={{
            backgroundColor: "white",
          }}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Загрузка дополнительных данных..."
            : hasNextPage
            ? "Загрузить еще"
            : "Больше нечего загружать"}
        </button>
      )}
    </section>
  );
};

export default SearchPageArticle;
