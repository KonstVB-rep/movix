import React from "react";

import useApi from "../../hooks/commonHooks/useApi.js";
import { useParams } from "react-router-dom";

import WrapperSlider from "../../../components/SliderCardsVideos/WrapperSlider";
import TrailersList from "./TrailersList";
import ErrorElement from "../../../components/ErrorElement";

const TrailersVideo = () => {
  const { movieType, id } = useParams();

  const { data, isLoading, isError, error, isFetching } =
    useApi().trailers_list(movieType, id);

  return (
    <ErrorElement isError={isError} error={error} title="Official videos">
      <WrapperSlider
        title="Official videos"
        isError={isError}
        error={error}
        data={data?.results}
        isFetching={isFetching}
      >
        <TrailersList data={data?.results} loading={isLoading} />
      </WrapperSlider>
    </ErrorElement>
  );
};

export default TrailersVideo;
