import React, { useState } from "react";
import { PlayBtn } from "../PlayBtn";
import cn from "./WatchTrailerButton.module.scss";
import VideoPlayer from "../VideoPleer/VideoPlayer.jsx";
import { useGetData } from "../../hooks/useGetData.js";
import { useParams } from "react-router-dom";

const WatchTrailerButton = ({ classname }) => {
  const { movieType, id } = useParams();

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { data, isError } = useGetData(
    "trailer_key",
    `/${movieType}/${id}/videos`,
    id
  );

  const startTrailer = () => {
    const trailer = data?.results.find((item) => item.name.includes("Trailer"));
    setShow(true);
    setVideoId(trailer.key);
  };
  console.log(videoId);
  return (
    <>
      {videoId ? (
        <>
          {" "}
          <div className={cn[classname]} onClick={startTrailer}>
            <PlayBtn />
            <span className={cn.title}>Watch Trailer</span>
          </div>
          <VideoPlayer
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
            isError={isError}
          />
        </>
      ) : null}
    </>
  );
};

export default WatchTrailerButton;
