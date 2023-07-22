import React from 'react';
import {WrapperSlider} from "../../../components/WrapperSlider/index.jsx";
import {VideosList} from "../../../components/VideosList";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {useParams} from "react-router-dom";


const SimilarVideos = () => {
  const {movieType, id} = useParams();
  const { data, endpoint, isLoading, isError, error } = useGetKeyData().similar(movieType, id);

  const title = movieType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <WrapperSlider
      title={title}
      isError={isError}
      error={error}
      loading={isLoading}
      endpoint={endpoint}
      data={data?.results}
    >
      <VideosList data={data?.results} loading={isLoading} endpoint={movieType}/>
    </WrapperSlider>
  );
};

export default SimilarVideos;
