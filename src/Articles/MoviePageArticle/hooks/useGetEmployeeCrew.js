import React from 'react';
import {useGetData} from "../../../components/hooks/useGetData.js";
import {getUniqData} from "/utils/helpers.js";

const useGetEmployeeCrew = (movieType,id) => {

  const {data, isLoading, isError} = useGetData(
    "crew",
    `/${movieType}/${id}/credits`,
    id
  )

  const director = data?.crew?.filter((person) => person.job === "Director");
  const writers = getUniqData(data?.crew, ['name', 'job'], ["Screenplay","Story","Writer"])

  return { writers, director , isLoading, isError}
};

export default useGetEmployeeCrew;
