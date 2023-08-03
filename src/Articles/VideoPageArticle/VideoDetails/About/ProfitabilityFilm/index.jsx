import React, { memo } from "react";
import { useParams } from "react-router-dom";
import cn from "../About.module.scss";

const ProfitabilityFilm = memo(({ movieDetails }) => {
  const { movieType } = useParams();
  const { budget, revenue } = movieDetails;
  return (
    <>
      {movieType === "movie" && budget ? (
        <div className={cn.profit}>
          {" "}
          {budget ? (
            <div className={cn.item}>
              <span className={cn["item__title"]}>Budget:</span>
              <span
                className={`${cn["item__amount"]} ${cn["item__amount_budget"]}`}
              >
                {budget} $
              </span>
            </div>
          ) : null}
          {revenue ? (
            <div className={cn.item}>
              <span className={cn["item__title"]}>Revenue:</span>
              <span
                className={`${cn["item__amount"]} ${
                  budget > revenue
                    ? cn["item__amount_deficit"]
                    : cn["item__amount_profit"]
                }`}
              >
                {revenue} $
              </span>
            </div>
          ) : null}{" "}
        </div>
      ) : null}
    </>
  );
});

export default ProfitabilityFilm;
