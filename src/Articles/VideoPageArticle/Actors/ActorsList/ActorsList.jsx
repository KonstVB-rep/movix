import React from "react";
import { useParams } from "react-router-dom";
import useGetKeyData from "../../../hooks/useGetKeyData.js";
import { ActorCard } from "../ActorCard";
import { Skeleton } from "../Skeleton";
import cn from "../Actors.module.scss";

const ActorsList = () => {
  const { movieType, id } = useParams();

  const { actors, isLoading } = useGetKeyData().crew(movieType, id);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {/*<ul className={cn.list}>*/}
            {actors.map((actor) => (
              <ActorCard key={actor.id} data={{ ...actor }} />
            ))}
          {/*</ul>*/}
        </>
      )}
    </>
  );
};

export default ActorsList;
