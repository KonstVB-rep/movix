import React from 'react';
import {VideoCard} from "../VideoCard";
import {SkeletonVideosList} from "../SkeletonVideosList";

const VideosList = ({loading, data, endpoint}) => {

  return (
    <>
      {!loading ? (
        <>
          {data?.map((item, index) => (
            <VideoCard data={item} endpoint={endpoint} key={index} />
          ))}
        </>
      ) : (
        <SkeletonVideosList />
      )}
    </>
  );
};

export default VideosList;
