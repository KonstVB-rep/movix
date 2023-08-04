import React from "react";
import { useParams } from "react-router-dom";

import { useGetData } from "../hooks/commonHooks/useGetData.js";
import NotFoundPageArticle from "../NotFoundPageArticle";
import VideoDetails from "./VideoDetails";
import Actors from "./Actors/index.jsx";
import TrailersVideo from "./TrailersVideo/index.jsx";
import SimilarVideos from "./SimilarVideos/index.jsx";
import RecommendedVideos from "./RecommendedVideos/index.jsx";

const VideoPageArticle = () => {
  const { movieType, id } = useParams();

  const { error } = useGetData(movieType, `/${movieType}/${id}`, id);

  return (
    <NotFoundPageArticle error={error}>
      <VideoDetails />
      <Actors />
      <TrailersVideo />
      <SimilarVideos />
      <RecommendedVideos />
    </NotFoundPageArticle>
  );
};

export default VideoPageArticle;
