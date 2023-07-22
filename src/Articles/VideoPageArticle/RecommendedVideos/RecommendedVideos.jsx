import React from 'react';
import {useParams} from "react-router-dom";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {WrapperSlider} from "../../../components/WrapperSlider/index.jsx";
import {VideosList} from "../../../components/VideosList/index.jsx";

const RecommendedVideos = () => {
  const {movieType, id} = useParams();
  const { data, endpoint, isLoading, isError, error } = useGetKeyData().recommendations(movieType, id);

  return (
    <WrapperSlider
      title="Recommendations"
      isError={isError}
      error={error}
      loading={isLoading}
      endpoint={endpoint}
      data={data?.results}
    >
      <VideosList data={data?.results} loading={isLoading} endpoint={endpoint}/>
    </WrapperSlider>
  );
};

export default RecommendedVideos;
