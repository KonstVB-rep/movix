import React from "react";
import { useParams } from "react-router-dom";
import InfinityScrollList from "../../components/InfinityScrollList";
import cn from "./DiscoverVideosSection.module.scss";
import ErrorElement from "../../components/ErrorElement";
import SelectsGroup from "./SelectGroup/index.jsx";
import useGetState from "../hooks/hooksDiscovery/useGetState.js";
import ButtonGradient from "../../components/Buttons/ButtonGradient/index.jsx";

const DiscoverVideosSection = () => {
  const { movieType } = useParams();

  const {
    videos,
    error,
    isError,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    dataPages,
    total_results,
    isSuccess,
    show,
    setShow,
    setSelectedOption,
    toggleVisibleSelects,
    hiddenSelects,
  } = useGetState(movieType);

  return (
    <main
      className={`${cn["wrapper-discover"]} ${
        show ? cn["wrapper-discover_show"] : null
      } wrapper main`}
      onClick={hiddenSelects}
    >
      <h1 className="title-article">
        Discovery {movieType === "tv" ? "TV Shows" : "Movies"}
      </h1>
      <div className={cn["sort-popup"]} onClick={toggleVisibleSelects}>
        <ButtonGradient classname={cn["sort-popup_btn"]}>
          <span>
            Sort by
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </span>
        </ButtonGradient>
      </div>
      <SelectsGroup
        show={show}
        setShow={setShow}
        setSelectedOption={setSelectedOption}
      />
      {isSuccess && !total_results ? (
        <h2 className="title-article">Nothing was found for your query</h2>
      ) : null}
      <ErrorElement isError={isError} error={error} classname="non-padding">
        <InfinityScrollList
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          data={videos}
          dataPages={dataPages}
          isFetching={isFetching}
        />
      </ErrorElement>
    </main>
  );
};

export default DiscoverVideosSection;
