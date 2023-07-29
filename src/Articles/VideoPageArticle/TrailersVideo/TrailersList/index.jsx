import React from 'react';
import Skeleton from "../Skeleton";
import TrailerCard from "../TrailerCard";
import cn from "../TrailersVideo.module.scss";
import withSlider from "../../../../hoc/withSlider.jsx";

const TrailersList = ({dataList}) => {

  return (
        <>
          {dataList.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer}/>
          ))}
        </>
  );
};

export default withSlider(TrailersList);

