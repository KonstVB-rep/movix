import React from 'react';
import {useParams} from "react-router-dom";
import SliderCardsVideos from "../../../components/SliderCardsVideos/index.jsx";


const SimilarVideos = () => {
  const {movieType} = useParams();
  const title = movieType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <SliderCardsVideos title={title} keyApi='similar'/>
  );
};

export default SimilarVideos;
