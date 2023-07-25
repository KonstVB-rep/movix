import React from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard/index.jsx";
import cn from "./SearchPageSection.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader/Loader.jsx";
import useGetKeyData from "../hooks/commonHooks/useGetKeyData.js";

const SearchPageSection = () => {
  const { query } = useParams();

  const {videos,error, isError, isLoading, fetchNextPage, hasNextPage, total_results,dataPages} =useGetKeyData().search_query(query)

  return (
    <section className={cn["search-section"]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h1 className={"title-article"}>
            Search results: <span>{total_results} {' '}</span> <span>matches</span>
          </h1>
          <InfiniteScroll
            className={cn.list}
            hasMore={hasNextPage || false}
            next={fetchNextPage}
            dataLength={videos ? videos.results.length : 0}
            scrollThreshold={0.85}
            loader={<div className={cn['wrapper-loader']}>
              <Loader />
            </div>}
          >
            {dataPages.map((page) =>
              page?.results.map((item) => {
                return (
                  <VideoCard key={item.id} data={item} classname="slide_grid" />
                );
              })
            )}
          </InfiniteScroll>
        </>
      )}
    </section>
  );
};

export default SearchPageSection;
