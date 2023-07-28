import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/commonHooks/useApi.js";
import InfinityScrollList from "../../components/InfinityScrollList/index.jsx";

import cn from "./SearchPageSection.module.scss";
import ErrorElement from "../../components/ErrorElement";

const SearchPageSection = () => {
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
  } = useApi().search_query(`/search/multi`, { query }, "search_query", query);
  console.log(total_results)
  return (
    <ErrorElement
      isError={isError}
      error={error}
      title='Search results: error in data collection'
      classname='main'
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
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          data={videos}
          dataPages={dataPages}
          isSuccess={isSuccess}
        />
      </div>
    </ErrorElement>
  );
};

export default SearchPageSection;
