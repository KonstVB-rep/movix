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
  } = useApi().useCrew(movieType, id);

  const crewDetails = {director, writers};

  return (
    <>
      {isErrorCrew ? <InfoRow classname = "error" data = "error"
                              list = {false}>{error?.message || 'Error receiving data'}</InfoRow> : (
        <>
          {dataMovieCrew.map((item) => (
            <InfoRow
              key = {item.title}
              classname = {item.classname}
              data = {crewDetails[item.prop]}
              keyName = {item.keyName}
              list = {item.list}
              title = {item.title}
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
