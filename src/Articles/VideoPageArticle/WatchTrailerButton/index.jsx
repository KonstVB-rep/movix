import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/commonHooks/useGetData.js";

import VideoPlayer from "../VideoPleer";
import PlayBtn from "./PlayBtn";

import cn from "./WatchTrailerButton.module.scss";

const videosVariants = ["trailer", "clip", "teaser"];

const WatchTrailerButton = ({ classname }) => {
  const { movieType, id } = useParams();
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { data, isError } = useGetData(
    "trailer_key",
    `/${movieType}/${id}/videos`,
    id
  );

  const isPlayerShow = data?.results.length || videoId;

  const startTrailer = () => {
    const trailer = data?.results.find((item) =>
      videosVariants.includes(item.type.toLowerCase())
    );
    const video = trailer || data?.results[0];

    if (video) {
      setVideoId(video.key);
      document.body.classList.add("overflow-hidden");
      setShow(true);
    }
  };

  return (
    <>
      {isPlayerShow ? (
        <>
          {" "}
          <div className={cn[classname]} onClick={startTrailer}>
            <PlayBtn />
            <span className={cn.title}>Watch Trailer</span>
          </div>
          <VideoPlayer
            isError={isError}
            setShow={setShow}
            setVideoId={setVideoId}
            show={show}
            videoId={videoId}
          />
        </>
      ) : null}
    </>
  );
};

export default WatchTrailerButton;
