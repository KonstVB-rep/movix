import React from 'react';
import VideoCard from "../VideoCard";
import SkeletonVideosList from "../SkeletonVideosList";

const VideosCardList = ({loading, data, endpoint ,isFetching,countSkeleton, classname}) => {

  return (
    <>
      {loading || isFetching ? (
        <SkeletonVideosList classname={classname} countSkeleton={countSkeleton}/>
      ) : (
        <>
          {data?.map((item, index) => (
            <VideoCard data={item} endpoint={endpoint} key={index} classname={classname}/>
          ))}
        </>
      )}
    </>
  );
};

export default VideosCardList;
