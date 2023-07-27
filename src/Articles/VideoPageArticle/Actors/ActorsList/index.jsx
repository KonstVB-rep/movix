import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/commonHooks/useApi.js";
import ActorCard from "../ActorCard";
import Skeleton from "../Skeleton";

const ActorsList = () => {
  const { movieType, id } = useParams();

  const { actors, isLoading } = useApi().crew(movieType, id);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {actors.map((actor, index) => (
            <ActorCard key={actor.id + index} data={actor} />
          ))}
        </>
      )}
    </>
  );
};

export default ActorsList;
