import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import cn from '../HeroBanner.module.scss'

const Content = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className={cn.banner__content}>
        <h1 className={cn.title}>Welcome.</h1>
        <h2 className={cn.subtitle}>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form className={cn.form} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={cn.form__btn}><span>Search</span></button>
        </form>
      </div>
    </>
  );
};

export default Content;
