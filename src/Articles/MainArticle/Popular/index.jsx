import React from "react";
import SliderCardsVideos from "../../../components/SliderCardsVideos";

const Popular = () => {

  return (
    <SliderCardsVideos title='Popular' keyApi='popular' endpoints={["movie", "tv"]} tabsNames={["Movies", "TV Shows"]}/>
  );
};

export default Popular;
