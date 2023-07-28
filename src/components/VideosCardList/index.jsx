import React from 'react';
import VideoCard from "../VideoCard";
import SkeletonVideosList from "../SkeletonVideosList";

const VideosCardList = ({loading, data, endpoint ,isFetching, classname, classnameCard}) => {

  return (
    <>
      {loading || isFetching ? (
        <SkeletonVideosList classname={classname} />
      ) : (
        <>
          {data?.map((item, index) => (
            <VideoCard data={item} endpoint={endpoint} key={index} classname={classnameCard}/>
          ))}
        </>
      )}
    </>
  );
};

export default VideosCardList;
