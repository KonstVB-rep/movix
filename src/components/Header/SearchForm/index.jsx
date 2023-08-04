import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../../assets/search.svg";

import cn from "../Header.module.scss";


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
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          className={`${cn.list} ${cn.search}`}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <form action="" className={cn.form} onSubmit={submitHandler}>
            <input
              ref={inputRef}
              className={cn.input_search}
              placeholder="Search for a movie or tv show...."
              type="text"
            />
            <button className={`${cn.button} ${cn.button_submit}`}>
              <img alt="search" src={SearchIcon} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchForm;
