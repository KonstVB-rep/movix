import React from "react";
import ActorCard from "../ActorCard";
import withSlider from "../../../../hoc/withSlider.jsx";

const ActorsList = ({ dataList }) => {
  return (
    <>
      {dataList.map((actor, index) => (
        <ActorCard key={actor.id + index} data={actor} />
      ))}
    </>
  );
};

export default withSlider(ActorsList);
