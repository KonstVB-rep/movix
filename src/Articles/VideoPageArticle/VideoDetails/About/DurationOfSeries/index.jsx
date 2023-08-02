import React, { memo } from "react";
import cn from "../About.module.scss";
import { useParams } from "react-router-dom";

import { dataDurationOsSeries, dataMovieRelease } from "../data/index.jsx";
import InfoRow from "../../InfoRow/index.jsx";

const DurationOfSeries = memo(({ movieDetails }) => {
  const { movieType } = useParams();
  return (
    <>
      {movieType === "tv" && (
        <div className={cn["info-group"]}>
          {dataDurationOsSeries.map((item) => (
            <InfoRow
              data={movieDetails[item.prop]}
              title={item.title}
              list={item.list}
              keyName={item.keyName}
              classname={item.classname}
              key={item.title}
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
