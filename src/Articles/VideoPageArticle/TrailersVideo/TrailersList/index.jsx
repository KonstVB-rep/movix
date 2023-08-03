import React, {memo} from 'react';
import withSlider from "../../../../hoc/withSlider.jsx";
import Skeleton from "../Skeleton";
import TrailerCard from "../TrailerCard";
import cn from "../TrailersVideo.module.scss";

const TrailersList = memo(({dataList}) => (
        <>
          {dataList.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer}/>
          ))}
        </>
  ));

export default withSlider(TrailersList);

