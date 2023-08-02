import React from "react";

import useApi from "../../hooks/commonHooks/useApi.js";
import { useParams } from "react-router-dom";

import TrailersList from "./TrailersList";
import ErrorElement from "../../../components/ErrorElement";
import Skeleton from "../TrailersVideo/Skeleton";

const TrailersVideo = () => {
  const { movieType, id } = useParams();
  const { data, isLoading, isError, error } = useApi().trailers_list(
    movieType,
    id
  );

  return (
    <ErrorElement isError={isError} error={error} title="Official videos">
      <Skeleton isLoading={isLoading}/>
      <TrailersList
        dataList={data?.results}
        isLoading={isLoading}
        title="Official videos"
        data={data?.results}
      />
    </ErrorElement>
  );
};

export default TrailersVideo;
