import React from 'react';
import cn from "../About/About.module.scss";
import {useParams} from "react-router-dom";
import dayjs from "dayjs";
import {dataDurationOsSeries, dataMovieRelease} from "../About/data/index.jsx";
import {InfoRow} from "../IInfoRow/index.jsx";

const DurationOfSeries = ({movieDetails}) => {

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
};

export default DurationOfSeries;
