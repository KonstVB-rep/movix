import React from "react";
import { useParams } from "react-router-dom";
import ButtonGradient from "../../components/Buttons/ButtonGradient/index.jsx";
import ErrorElement from "../../components/ErrorElement";
import InfinityScrollList from "../../components/InfinityScrollList";
import useGetState from "../hooks/hooksDiscovery/useGetState.js";
import cn from "./DiscoverVideosSection.module.scss";
import SelectsGroup from "./SelectGroup/index.jsx";

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
        setSelectedOption={setSelectedOption}
        setShow={setShow}
        show={show}
      />
      {isSuccess && !total_results ? (
        <h2 className="title-article">Nothing was found for your query</h2>
      ) : null}
      <ErrorElement classname="non-padding" error={error} isError={isError}>
        <InfinityScrollList
          data={videos}
          dataPages={dataPages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isLoading={isLoading}
        />
      </ErrorElement>
    </main>
  );
};

export default DiscoverVideosSection;
