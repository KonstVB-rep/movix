import React from "react";
import VideoCard from "../VideoCard";

const VideosCardList = ({ dataList, endpointCard, classnameCard }) => {
  console.log(dataList)
  return (
    <>
      {dataList?.map((item, index) => (
        <VideoCard
          data={item}
          endpoint={endpointCard}
          key={index}
          classnameCard={classnameCard}
        />
      ))}
    </>
  );
};

export default VideosCardList;
