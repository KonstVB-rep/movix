import React, { FormEventHandler, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useAppDispatch } from "../../../hooks/redux-hook";
import { getData } from "../../../utils/api";

import { getApiConfiguration } from "../../../store/slices/mainSlice";
import { DataMoviesRangeDate } from "../../../types/movies";
import { TypeUrl } from "../../../types/url";

const HeroBanner = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [banner, setBanner] = useState<string | undefined>("");
  const [query, setQuery] = useState<string>("");

  const { data, isLoading, isError, error } = useQuery(
    ["movies_upcoming"],
    async () => {
      return getData("/movie/upcoming");
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      cacheTime: 10000,
      onSettled: (data: DataMoviesRangeDate) => {
        const img =
          data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBanner(img);
      },
    }
  );

  const { data: res, isLoading: loading } = useQuery(
    ["image_params"],
    async () => {
      return getData("/configuration");
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      cacheTime: 10000,
      onSettled: (data: TypeUrl) => {
        const url = {
          backdrop: data?.images.secure_base_url + "original",
          poster: data?.images.secure_base_url + "original",
          profile: data?.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      },
    }
  );

  const submitHandler = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  // console.log(data);
  return (
    <div className="banner">
      {/*{!isLoading && (*/}
      {/*  <div className="backdrop-img">/!*<Image src={banner} />*!/</div>*/}
      {/*)}*/}
      <div className="wrapper">
        <div className="banner__content">
          <h1 className="banner__title">Welcome.</h1>
          <h2 className="banner__subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <form className="search" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default HeroBanner;
