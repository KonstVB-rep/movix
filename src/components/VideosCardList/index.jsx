import React from "react";
import VideoCard from "../VideoCard";

const VideosCardList = ({ dataList, endpointCard, classnameCard }) => {
  return (
    <>
      {dataList?.map((item, index) => (
        <VideoCard
          data={item}
          endpoint={endpointCard}
          key={index}
          classname={classnameCard}
        />
      ))}
    </>
  );
};

export default VideosCardList;
