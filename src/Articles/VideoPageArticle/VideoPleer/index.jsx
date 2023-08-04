import React from "react";
import ReactPlayer from "react-player";

import ButtonClose from "../../../components/Buttons/ButtonClose/index.jsx";
import ErrorElement from "../../../components/ErrorElement";

import cn from "./VideoPlayer.module.scss";

const VideoPlayer = ({
                       show,
                       setShow,
                       videoId,
                       setVideoId,
                       isError,
                     }) => {
  const hidePopup = () => {
    setShow(false);
    document.body.classList.remove("overflow-hidden");
    setVideoId(null);
  };

  return (
    <div className={`${cn.video} ${show ? cn.visible : ""}`}>
      <div className={cn["opacity-layer"]} onClick={hidePopup}></div>
      <div className={cn.player}>
        <ButtonClose close={hidePopup}/>
        {isError ? (
          <ErrorElement classname="error-trailer">Video not found</ErrorElement>
        ) : (
          <ReactPlayer
            controls
            height="100%"
            playing={true}
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
