import React from 'react';
import {useParams} from "react-router-dom";
import useApi from "../../../../hooks/commonHooks/useApi.js";
import InfoRow from "../../InfoRow/index.jsx";
import {dataMovieCrew} from "../data/index.jsx";

const WritersAndDirector = () => {
  const {movieType, id} = useParams();

  const {
    writers,
    director,
    isError: isErrorCrew,
    error
  } = useApi().crew(movieType, id);

  const crewDetails = {director, writers};

  return (
    <>
      {isErrorCrew ? <InfoRow data = "error" list = {false}
                              classname = "error">{error?.message || 'Error receiving data'}</InfoRow> : (
        <>
          {dataMovieCrew.map((item) => (
            <InfoRow
              data = {crewDetails[item.prop]}
              title = {item.title}
              list = {item.list}
              keyName = {item.keyName}
              classname = {item.classname}
              key = {item.title}
            >
              {item.child ? item.child(crewDetails) : null}
            </InfoRow>
          ))}
        </>
      )}
    </>
  )
}


export default WritersAndDirector;
