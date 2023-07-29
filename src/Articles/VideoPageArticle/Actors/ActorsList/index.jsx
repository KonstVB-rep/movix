import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/commonHooks/useApi.js";
import ActorCard from "../ActorCard";
import Skeleton from "../Skeleton";
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
