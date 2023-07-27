import React from "react";

import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";

import WrapperSlider from "../../../components/SliderCardsVideos/WrapperSlider";
import ActorsList from "./ActorsList";
import ErrorElement from "../../../components/ErrorElement";

const Actors = () => {
  const { movieType, id } = useParams();

  const { actors, isError, error } = useApi().crew(movieType, id);

  return (
    <>
      <ErrorElement isError={isError} error={error} title={"Top actors"}>
        <WrapperSlider
          title="Top actors"
          isError={isError}
          error={error}
          data={actors}
        >
          <ActorsList />
        </WrapperSlider>
      </ErrorElement>
    </>
  );
};

export default Actors;

