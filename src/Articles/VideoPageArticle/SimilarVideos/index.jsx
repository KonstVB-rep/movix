import React from "react";
import { useParams } from "react-router-dom";

import SliderBox from "../../../components/SliderBox/index.jsx";

const SimilarVideos = () => {
  const { movieType } = useParams();

  const title = movieType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return <SliderBox keyApi="useSimilar" title={title} />;
};

export default SimilarVideos;
