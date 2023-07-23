import React from 'react';
import {VideoCard} from "../VideoCard";
import {SkeletonVideosList} from "../SkeletonVideosList";

const VideosCardList = ({loading, data,endpoint,isFetching}) => {

  return (
    <>
      {loading || isFetching ? (
          <SkeletonVideosList />
      ) : (
        <>
          {data?.map((item, index) => (
            <VideoCard data={item} endpoint={endpoint} key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default VideosCardList;
