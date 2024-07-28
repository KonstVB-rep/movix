import React, { memo } from "react";

import TrailerCard from "../TrailerCard";

import cn from "../TrailersVideo.module.scss";

const TrailersList = memo(({ dataList }) => (
  <ul className={`${cn.trailers} wrapper`}>
    {dataList?.map((trailer) => (
      <TrailerCard key={trailer.id} data={trailer} />
    ))}
  </ul>
));

export default TrailersList;
