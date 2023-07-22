import React from "react";

import { HeroBanner } from "../Articles/MainArticle/HeroBanner";
import { Popular } from "../Articles/MainArticle/Popular";
import {TopRated} from "../Articles/MainArticle/TopRated";
import {Trending} from "../Articles/MainArticle/Trending";

const Main = () => {
  return (
    <div className="main">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Main;
