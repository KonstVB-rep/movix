import React, {memo} from 'react';
import InfoRow from "../../InfoRow/index.jsx";
import cn from "../About.module.scss";
import {dataMovieRelease} from "../data/index.jsx";

const ReleaseInfo = memo(({movieDetails}) => (
    <div className={cn["info-group"]}>
      {dataMovieRelease.map((item) => (
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
  ));

export default ReleaseInfo;
