import React from "react";

import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";

import ActorsList from "./ActorsList";
import ErrorElement from "../../../components/ErrorElement";

import Skeleton from "./Skeleton";

const Actors = () => {
  const { movieType, id } = useParams();

  const { actors, isError, error, isLoading } = useApi().crew(movieType, id);

  return (
    <ErrorElement isError={isError} error={error} title="Top actors">
      <Skeleton isLoading={isLoading} />
      <ActorsList title="Top actors" data={actors} dataList={actors} />
    </ErrorElement>
  );
};

export default Actors;
