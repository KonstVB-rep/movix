import React from 'react';
import {Skeleton} from "../Skeleton";
import {VideoCard} from "../VideoCard";
import cn from "../TrailersVideo.module.scss";

const VideosList = ({data, loading}) => {

  return (
    <>
      {!loading ?
        (
          <>
              {data.map((trailer) => (
                <VideoCard key={trailer.id} data={trailer}/>
              ))}
          </>
        ) :  <Skeleton data={data}/>}
    </>
  );
};

export default VideosList;
