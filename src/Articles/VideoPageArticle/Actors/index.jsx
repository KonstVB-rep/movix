import React from "react";
import { useParams } from "react-router-dom";

import ErrorElement from "../../../components/ErrorElement";
import ActorsList from "./ActorsList";
import Skeleton from "./Skeleton";

import useApi from "../../hooks/commonHooks/useApi.js";

const Actors = () => {
  const { movieType, id } = useParams();

  const { actors, isError, error, isLoading } = useApi().useCrew(movieType, id);

  return (
    <ErrorElement error={error} isError={isError} title="Top actors">
      <Skeleton isLoading={isLoading} />
      <ActorsList
        data={actors}
        dataList={actors}
        title="Top actors"
        classList="List_actors"
      />
    </ErrorElement>
  );
};

export default Actors;
