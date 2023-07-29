import React, {memo} from 'react';
import VideosCardList from "../VideosCardList";
import withSlider from "../../hoc/withSlider.jsx";

const VideoCardListWithSlider = memo((props) => {

  return <VideosCardList {...props}/>
});

export default withSlider(VideoCardListWithSlider);
