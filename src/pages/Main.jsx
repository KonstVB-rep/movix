import React from "react";

import { HeroBanner } from "../Articles/MainArticle/HeroBanner/index";
import { PopularMovies } from "../Articles/MainArticle/PopularMovies/index";
import TopRated from "../Articles/MainArticle/TopRated/TopRated.jsx";
import {Trending} from "../Articles/MainArticle/Trending";

const Main = () => {
  return (
    <div className="main">
      <HeroBanner />
      <Trending />
      <PopularMovies />
      <TopRated />
    </div>
  );
};

export default Main;
