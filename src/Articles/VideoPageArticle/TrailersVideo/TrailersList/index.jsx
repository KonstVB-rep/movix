import React, { memo } from "react";

import withSlider from "../../../../hoc/withSlider.jsx";
import TrailerCard from "../TrailerCard";

import cn from "../TrailersVideo.module.scss";

const TrailersList = memo(({ dataList }) => (
  <ul className={cn.trailers}>
    {dataList.map((trailer) => (
      <TrailerCard key={trailer.id} data={trailer} />
    ))}
  </ul>
));

export default withSlider(TrailersList);
