import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import cn from "../HeroBanner.module.scss";

const Content = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      navigate(`/search/${inputRef.current.value}`);
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
            ref={inputRef}
          />
          <button className={cn.form__btn}>
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Content;
