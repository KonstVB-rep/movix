import React from "react";
import { useParams } from "react-router-dom";
import ProfitabilityFilm from "./ProfitabilityFilm";
import DurationOfSeries from "./DurationOfSeries";
import useApi from "../../../hooks/commonHooks/useApi.js";


import cn from "./About.module.scss";
import WritersAndDirector from "./WritersAndDirector";
import ProductionCompanies from "./ProductionCompanies/index.jsx";
import ReleaseInfo from "./ReleaseInfo/index.jsx";

const About = () => {

  const { movieType, id } = useParams();

  const { data: movieDetails } = useApi().movie_details(movieType, id);

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
