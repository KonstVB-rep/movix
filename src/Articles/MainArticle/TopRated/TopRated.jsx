import React from "react";

import SliderCardsVideos from "../../../components/SliderCardsVideos";

const TopRated = () => {
  return(
    <SliderCardsVideos title='Top rated' keyApi='topRated' endpoints={["movie", "tv"]} tabsNames={["Movies", "TV Shows"]}/>
  )
};

export default TopRated;
