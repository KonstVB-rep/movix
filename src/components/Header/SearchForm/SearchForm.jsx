import React, { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import useClickOutside from "../../../Articles/hooks/useClickOutside.js";
import cn from "../Header.module.scss";

const SearchForm = ({ setShowSearch, showSearch }) => {
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [query, setQuery] = useState("");

  useClickOutside(searchRef, () => {
    if (showSearch) {
      setShowSearch(false);
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };

  return (
    <>
      {showSearch && (
        <div className={cn.search} ref={searchRef}>
          <div className="wrapper">
            <form className={cn.form} onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className={cn.form__btn}>
                <HiOutlineSearch />
              </button>
              <button
                onClick={() => setShowSearch(false)}
                type="button"
                className={cn.form__btn}
              >
                <VscChromeClose />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForm;
