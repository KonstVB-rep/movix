import React, {memo} from 'react';
import cn from "../About.module.scss";
import {dataMovieRelease} from "../data/index.jsx";
import InfoRow from "../../InfoRow/index.jsx";

const ReleaseInfo = memo(({movieDetails}) => {

  return (
    <div className={cn["info-group"]}>
      {dataMovieRelease.map((item) => (
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
  );
});

export default ReleaseInfo;
