import React from "react";

import SliderCardsVideos from "../../../components/SliderCardsVideos";

const Trending = () => {

  return (
    <SliderCardsVideos title='Trending' keyApi='trending' endpoints={["day", "week"]} tabsNames={["Day", "Week"]} />
  );
};

export default Trending;
