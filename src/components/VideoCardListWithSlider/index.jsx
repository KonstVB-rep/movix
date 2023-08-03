import React, {memo} from 'react';
import withSlider from "../../hoc/withSlider.jsx";
import VideosCardList from "../VideosCardList";

const VideoCardListWithSlider = memo((props) => <VideosCardList {...props}/>);

export default withSlider(VideoCardListWithSlider);
