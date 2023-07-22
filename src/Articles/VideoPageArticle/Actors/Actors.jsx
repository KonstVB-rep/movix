import React from "react";

import { useParams } from "react-router-dom";
import useGetKeyData from "../../hooks/useGetKeyData.js";

import { WrapperSlider } from "../../../components/WrapperSlider/index.jsx";
import {ActorsList} from "./ActorsList";

const Actors = () => {
  const { movieType, id } = useParams();

  const {actors,isLoading,isError, error } = useGetKeyData().crew(movieType, id);

  return (
    <WrapperSlider
      title={"Top actors"}
      isError={isError}
      error={error}
      loading={isLoading}
      data={actors}
    >
      <ActorsList />
    </WrapperSlider>
  );
};

export default Actors;
