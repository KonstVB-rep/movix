import React from "react";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/commonHooks/useApi.js";

import ErrorElement from "../../../components/ErrorElement";
import Skeleton from "../TrailersVideo/Skeleton";
import TrailersList from "./TrailersList";

const TrailersVideo = () => {
  const { movieType, id } = useParams();
  const { data, isLoading, isError, error } = useApi().useTrailersList(
    movieType,
    id
  );

  return (
    <ErrorElement error={error} isError={isError} title="Official videos">
      <Skeleton isLoading={isLoading}/>
      <TrailersList
        data={data?.results}
        dataList={data?.results}
        isLoading={isLoading}
        title="Official videos"
      />
    </ErrorElement>
  );
};

export default TrailersVideo;
