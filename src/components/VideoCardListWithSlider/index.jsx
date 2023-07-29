import React from 'react';
import VideosCardList from "../VideosCardList";
import withSlider from "../../hoc/withSlider.jsx";

const VideoCardListWithSlider = (props) => {
  return <VideosCardList {...props}/>
};

export default withSlider(VideoCardListWithSlider);
