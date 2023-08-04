import React from "react";

import VideoCard from "../VideoCard";

const VideosCardList = ({ dataList, endpointCard, classnameCard }) => (
    <>
      {dataList?.map((item, index) => (
        <VideoCard
          key={index}
          classnameCard={classnameCard}
          data={item}
          endpoint={endpointCard}
        />
      ))}
    </>
  );

export default VideosCardList;
