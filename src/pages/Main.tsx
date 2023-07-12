import React from "react";

import { HeroBanner } from "../Articles/MainArticle/HeroBanner";
import { PopularMovies } from "../Articles/MainArticle/PopularMovies";

const Main = () => {
  return (
    <div className="main">
      <HeroBanner />
      <PopularMovies />
    </div>
  );
};

export default Main;
