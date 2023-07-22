import React, {useState} from 'react';

import useGetKeyData from "../../hooks/useGetKeyData.js";
import {useParams} from "react-router-dom";

import {WrapperSlider} from "../../../components/WrapperSlider/index.jsx";
import VideosList from "./VideosList/VideosList.jsx";

const TrailersVideo = () => {
  const {movieType, id} = useParams();


  const {isLoading,isError, error} = useGetKeyData().trailers_list(movieType, id)


  return (
    <WrapperSlider
      title={"Official videos"}
      isError={isError}
      error={error}
      loading={isLoading}
    >
      <VideosList/>
    </WrapperSlider>
  );
};

export default TrailersVideo;
