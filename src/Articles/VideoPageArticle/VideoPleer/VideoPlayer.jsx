import React from "react";
import ReactPlayer from "react-player";
import cn from "./VideoPlayer.module.scss";
import { ErrorElement } from "../../../components/ErrorElement/index.jsx";
import {IoCloseCircleSharp} from "react-icons/io5";

const VideoPlayer = ({
  show,
  setShow,
  videoId,
  setVideoId,
  isError,
}) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`${cn.video} ${show ? cn.visible : ""}`}>
      <div className={cn["opacity-layer"]} onClick={hidePopup}></div>
      <div className={cn.player}>
        <button className={cn.close} onClick={hidePopup}>
          <IoCloseCircleSharp/>
        </button>
        {isError ? (
          <ErrorElement classname="error-trailer">Video not found</ErrorElement>
        ) : (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={true}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
