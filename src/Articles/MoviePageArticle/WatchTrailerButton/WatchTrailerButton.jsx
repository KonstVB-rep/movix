import React, {useState} from 'react';
import {PlayBtn} from "../PlayBtn";
import cn from "./WatchTrailerButton.module.scss";
import VideoPlayer from "../VideoPleer/VideoPlayer.jsx";
import {useGetData} from "../../../components/hooks/useGetData.js";
import {useParams} from "react-router-dom";

const WatchTrailerButton = () => {
  const { movieType, id } = useParams();

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { data, isError } = useGetData('trailer_key', `/${movieType}/${id}/videos`, id);

  const startTrailer = () => {
    const trailer = data?.results.find(item => item.name.includes('Trailer'))
    setShow(true);
    setVideoId(trailer.key);
  }

  return (
    <>
      <div
        className={cn.play}
        onClick={startTrailer}
      >
        <PlayBtn />
        <span className={cn.text}>Watch Trailer</span>
      </div>
      <VideoPlayer
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
        isError={isError}
      />
    </>
  );
};

export default WatchTrailerButton;
