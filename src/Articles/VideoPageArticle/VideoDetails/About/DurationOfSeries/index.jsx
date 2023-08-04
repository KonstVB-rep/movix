import React, { memo } from "react";
import { useParams } from "react-router-dom";

import InfoRow from "../../InfoRow/index.jsx";

import cn from "../About.module.scss";

import { dataDurationOsSeries } from "../data/index.jsx";

const DurationOfSeries = memo(({ movieDetails }) => {
  const { movieType } = useParams();
  return (
    <>
      {movieType === "tv" && (
        <div className={cn["info-group"]}>
          {dataDurationOsSeries.map((item) => (
            <InfoRow
              key={item.title}
              classname={item.classname}
              data={movieDetails[item.prop]}
              keyName={item.keyName}
              list={item.list}
              title={item.title}
            >
              {item.child ? item.child(movieDetails) : null}
            </InfoRow>
          ))}
        </div>
      )}
    </>
  );
});

export default DurationOfSeries;
