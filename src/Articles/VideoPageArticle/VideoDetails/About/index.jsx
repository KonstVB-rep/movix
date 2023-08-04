import React from "react";

import DurationOfSeries from "./DurationOfSeries";
import ProductionCompanies from "./ProductionCompanies/index.jsx";
import ProfitabilityFilm from "./ProfitabilityFilm";
import ReleaseInfo from "./ReleaseInfo/index.jsx";

import { useParams } from "react-router-dom";
import useApi from "../../../hooks/commonHooks/useApi.js";
import WritersAndDirector from "./WritersAndDirector";

import cn from "./About.module.scss"

const About = () => {

  const { movieType, id } = useParams();

  const { data: movieDetails } = useApi().useMovieDetails(movieType, id);

  return (
    <div className={cn.about}>
      <ProfitabilityFilm movieDetails={movieDetails} />
      <DurationOfSeries movieDetails={movieDetails} />
      <ReleaseInfo movieDetails={movieDetails} />
      <WritersAndDirector />
      <ProductionCompanies movieDetails={movieDetails} />
    </div>
  );
};

export default About;
