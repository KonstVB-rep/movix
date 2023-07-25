import React, { useState } from "react";

import useGetKeyData from "../../hooks/commonHooks/useGetKeyData.js";
import { useParams } from "react-router-dom";

import { WrapperSlider } from "../../../components/WrapperSlider/index.jsx";
import {VideosList} from "./VideosList";

const TrailersVideo = () => {
  const { movieType, id } = useParams();

  const { data, isLoading, isError, error, isFetching } = useGetKeyData().trailers_list(
    movieType,
    id
  );
  console.log('wrapper')

  return (
    <WrapperSlider
      title={"Official videos"}
      isError={isError}
      error={error}
      data={data?.results}
      isFetching={isFetching}
    >
      <VideosList data={data?.results} loading={isLoading} />
    </WrapperSlider>
  );
};

export default TrailersVideo;
