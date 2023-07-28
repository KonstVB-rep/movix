import React from "react";

import useApi from "../../hooks/commonHooks/useApi.js";
import { useParams } from "react-router-dom";

import TrailersList from "./TrailersList";
import ErrorElement from "../../../components/ErrorElement";
import Slider from "../../../components/Slider/index.jsx";

const TrailersVideo = () => {
  const { movieType, id } = useParams();

  const { data, isLoading, isError, error, isFetching } =
    useApi().trailers_list(movieType, id);

  return (
    <ErrorElement isError={isError} error={error} title="Official videos">
      <Slider title="Official videos" data={data?.results}>
        <TrailersList data={data?.results} isLoading={isLoading} />
      </Slider>
    </ErrorElement>
  );
};

export default TrailersVideo;
