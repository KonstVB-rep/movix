import React from "react";
import useGetUpcomingMovies from "../../hooks/useUpcomingMovies";
import { Img } from "../../../../components/Img";

const Banner = () => {
  const { data, isLoading, isError, error, banner } = useGetUpcomingMovies();

  return (
    <>
      {!isLoading && (
        <div className="banner__img">
          <Img src={banner} />
        </div>
      )}
    </>
  );
};

export default Banner;
