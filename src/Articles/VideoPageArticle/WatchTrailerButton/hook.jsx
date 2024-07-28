import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/commonHooks/useGetData.js";

const videosVariants = ["trailer", "clip", "teaser"];

const useData = () => {
  const { movieType, id } = useParams();
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { data, isError } = useGetData(
    "trailer_key",
    `/${movieType}/${id}/videos`,
    id
  );

  const isPlayerShow = data?.results.length || videoId;

  const startTrailer = useCallback(() => {
    const trailer = data?.results.find((item) =>
      videosVariants.includes(item.type.toLowerCase())
    );
    const video = trailer || data?.results[0];

    if (video) {
      setVideoId(video.key);
      document.body.classList.add("overflow-hidden");
      setShow(true);
    }
  }, [data?.results]);

  return {
    startTrailer,
    isPlayerShow,
    videoId,
    setVideoId,
    setShow,
    show,
    isError,
  };
};

export default useData;
