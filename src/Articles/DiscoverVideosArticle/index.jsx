import React from "react";
import { useParams } from "react-router-dom";
import InfinityScrollList from "../../components/InfinityScrollList/index.jsx";
import cn from "./DiscoverVideosSection.module.scss";
import ErrorElement from "../../components/ErrorElement/index.jsx";
import { BsThreeDotsVertical } from "react-icons/bs";
import SelectsGroup from "./SelectsGroup.jsx";
import useGetState from "../hooks/hooksDiscovery/useGetState.js";

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
      <div className={cn["sort-popup"]}>
        <button onClick={toggleVisibleSelects} className={cn["sort-popup_btn"]}>
          <span>
            Sort by
            <BsThreeDotsVertical />
          </span>
        </button>
        <SelectsGroup
          show={show}
          setShow={setShow}
          setSelectedOption={setSelectedOption}
        />
      </div>
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
