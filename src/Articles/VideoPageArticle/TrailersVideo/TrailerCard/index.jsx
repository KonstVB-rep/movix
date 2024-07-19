import { useRef, memo } from "react";

import Img from "../../../../components/Img";
import WatchTrailerButton from "../../WatchTrailerButton";

import cn from "../TrailersVideo.module.scss";

const TrailerCard = memo(({ data, style }) => {
  const { id, key, name } = data;

  const ref = useRef(null);
  return (
    <li key={id} className={cn.video} style={style}>
      <div
        ref={ref}
        className={cn.video__thumbnail}
        style={{
          background: `url(https://img.youtube.com/vi/${key}/mqdefault.jpg) center center / cover no-repeat`,
        }}
      >
        <Img
          src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
          onLoad={() =>
            (ref.current.className += " " + cn.video__thumbnail_loaded)
          }
        />
        <WatchTrailerButton classname="play-item" />
      </div>
      <div className={cn.video__title}>{name}</div>
    </li>
  );
});

export default TrailerCard;
