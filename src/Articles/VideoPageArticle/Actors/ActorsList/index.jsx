import React, { memo } from "react";

import withSlider from "../../../../hoc/withSlider.jsx";
import ActorCard from "../ActorCard";

const ActorsList = memo(({ dataList }) => (
    <>
      {dataList.map((actor, index) => (
        <ActorCard key={actor.id + index} data={actor} />
      ))}
    </>
  ));

export default withSlider(ActorsList);
