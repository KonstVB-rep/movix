import React from 'react';

const useOnChangeSelect = (movieType,setSelectedOption) => {
  const handleChangeSortBy = (value) => {
    if (value) {
      setSelectedOption((prev) => ({ ...prev, sort_by: value }));
    } else {
      setSelectedOption((prev) => {
        const { sort_by, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleChangeSortYear = (value) => {
    const option =
      movieType === "movie" ? "primary_release_year" : "first_air_date_year";
    if (value) {
      setSelectedOption((prev) => ({ ...prev, [option]: value }));
    } else {
      setSelectedOption((prev) => {
        const obj = { ...prev };
        delete obj[option];
        return obj;
      });
    }
  };

  const handleChangeSortGenres = (value) => {
    if (value?.length) {
      setSelectedOption((prev) => ({ ...prev, with_genres: String(value) }));
    } else {
      setSelectedOption((prev) => {
        const { with_genres, ...rest } = prev;
        return rest;
      });
    }
  };
  return {
    handleChangeSortBy,handleChangeSortYear,handleChangeSortGenres
  }
};

export default useOnChangeSelect;
