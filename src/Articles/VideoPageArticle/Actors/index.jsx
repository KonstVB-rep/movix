import React from "react";

import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";

import ActorsList from "./ActorsList";
import ErrorElement from "../../../components/ErrorElement";

import Slider from "../../../components/Slider/index.jsx";

const Actors = () => {
  const { movieType, id } = useParams();

  const { actors,isError, error, isLoading } = useApi().crew(
    movieType,
    id
  );

  return (
      <ErrorElement isError={isError} error={error} title="Top actors">
        <Slider title="Top actors" data={actors}>
          <ActorsList actors = {actors} isLoading = {isLoading} />
        </Slider>
      </ErrorElement>
  );
};

export default Actors;
