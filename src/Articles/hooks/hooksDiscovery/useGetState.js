import React, {useCallback, useEffect, useState} from "react";
import useApi from "../commonHooks/useApi.js";
import cn from "../../DiscoverVideosArticle/DiscoverVideosSection.module.scss";

const useGetState = (movieType) => {
  const [selectedOption, setSelectedOption] = useState({});

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
  } = useApi().discover(
    `/discover/${movieType}`,
    selectedOption,
    `discover_${movieType}`,
    selectedOption
  );

  const [show, setShow] = useState(false);

  const toggleVisibleSelects = useCallback(() => {
    setShow((p) => !p);
  }, []);

  const hiddenSelects = useCallback((e) => {
    if (show) {
      if (
        e.target.classList.contains(cn["wrapper-discover_show"]) ||
        e.code === "Escape"
      ) {
        setShow(false);
      }
    }
  }, [show]);

  useEffect(() => {
    setSelectedOption({});
  }, [movieType]);

  useEffect(() => {
    document.documentElement.addEventListener("keydown", hiddenSelects);
    return () => {
      document.documentElement.removeEventListener("keydown", hiddenSelects);
    };
  }, [show]);

  return {
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
    hiddenSelects
  };
};

export default useGetState;
