import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="banner__content">
        <h1 className="banner__content-title">Welcome.</h1>
        <h2 className="banner__content-subtitle">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="form__btn">Search</button>
        </form>
      </div>
    </>
  );
};

export default Content;
