import {getUniqData} from "/utils/helpers.js";
import {useGetData} from "../commonHooks/useGetData.js";

const useGetEmployeeCrew = (movieType,id) => {

  const { data, isLoading, isError, error } = useGetData(
    "crew",
    `/${movieType}/${id}/credits`,
    id,
    { enabled: !!(movieType && id) }
  );

  const director = data?.crew?.filter((person) => person.job === "Director");
  const writers = getUniqData(data?.crew, ['name', 'job'], ["Screenplay","Story","Writer"])
  const actors = data?.cast;

  return { writers, director, actors, isLoading, isError,error }
};

export default useGetEmployeeCrew;
