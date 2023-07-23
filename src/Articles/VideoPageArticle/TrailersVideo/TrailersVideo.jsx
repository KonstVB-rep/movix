import React, { useState } from "react";

import useGetKeyData from "../../hooks/useGetKeyData.js";
import { useParams } from "react-router-dom";

import { WrapperSlider } from "../../../components/WrapperSlider/index.jsx";
import {VideosList} from "./VideosList";

const TrailersVideo = () => {
  const { movieType, id } = useParams();

  const { data, isLoading, isError, error } = useGetKeyData().trailers_list(
    movieType,
    id
  );

  return (
    <WrapperSlider
      title={"Official videos"}
      isError={isError}
      error={error}
      data={data?.results}
      loading={isLoading}
    >
      <VideosList data={data?.results} loading={isLoading} />
    </WrapperSlider>
  );
};

export default TrailersVideo;
