import useData from "./hook";

import VideoPlayer from "../VideoPleer";
import PlayBtn from "./PlayBtn";

import cn from "./WatchTrailerButton.module.scss";

const WatchTrailerButton = ({ classname }) => {
  const {
    startTrailer,
    isPlayerShow,
    videoId,
    setVideoId,
    setShow,
    show,
    isError,
  } = useData();

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
