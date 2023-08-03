import React from "react";
import Actors from "../Articles/VideoPageArticle/Actors";
import RecommendedVideos from "../Articles/VideoPageArticle/RecommendedVideos";
import SimilarVideos from "../Articles/VideoPageArticle/SimilarVideos";
import TrailersVideo from "../Articles/VideoPageArticle/TrailersVideo";
import VideoDetails from "../Articles/VideoPageArticle/VideoDetails";

const MovieSinglePage = () => (
    <>
      <VideoDetails />
      <Actors />
      <TrailersVideo />
      <SimilarVideos />
      <RecommendedVideos />
    </>
  );

export default MovieSinglePage;
