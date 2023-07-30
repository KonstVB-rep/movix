import React, {useRef} from "react";
import cn from "../Header.module.scss";
import SearchIcon from "../../../assets/search.svg";

import {useNavigate} from "react-router-dom";

const SearchForm = ({ isSearchOpen }) => {

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
      {isSearchOpen && (
        <div className={`${cn.list} ${cn.search}`}>
          <form action="components/Header/SearchForm/index.jsx" className={cn.form} onSubmit={submitHandler}>
            <input
              type="text"
              className={cn.input_search}
              ref={inputRef}
              placeholder="Search for a movie or tv show...."
            />
              <button className={`${cn.button} ${cn.button_submit}`}>
                <img src={SearchIcon} alt="search" />
              </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchForm;
