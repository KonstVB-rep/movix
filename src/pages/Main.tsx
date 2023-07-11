import React from "react";

import { HeroBanner } from "../components/HeroBanner";
import { PopularMovies } from "../components/PopularMovies";

const Main = () => {
  return (
    <div className="main">
      <HeroBanner />
      <PopularMovies />
    </div>
  );
};

export default Main;
