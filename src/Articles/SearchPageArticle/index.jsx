import React from "react";
import { useParams } from "react-router-dom";

import useApi from "../hooks/commonHooks/useApi.js";

import ErrorElement from "../../components/ErrorElement";
import InfinityScrollList from "../../components/InfinityScrollList/index.jsx";

import cn from "./SearchPageArticle.module.scss";

const SearchPageArticle = () => {
  const { query } = useParams();

  const {
    videos,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    total_results,
    dataPages,
    isSuccess
  } = useApi().useSearchQuery(`/search/multi`, { query }, "search_query", query);

  return (
    <ErrorElement
      classname='main'
      error={error}
      isError={isError}
      title='Search results: error in data collection'
    >
      <div className="main wrapper">
        <h1 className="title-article">
          <span className={cn.title__span}>Search results:</span>
          {isSuccess && !total_results ? (
              <span className={cn.title__span_loading}>Nothing was found for your query</span>
          ) : (
            <>
              <span className={cn.title__span_total}>{total_results} </span>
              <span className={cn.title__span_text}>matches</span>
            </>
          )}
        </h1>
        <InfinityScrollList
          data={videos}
          dataPages={dataPages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </ErrorElement>
  );
};

export default SearchPageArticle;
