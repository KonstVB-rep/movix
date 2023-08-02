import React, { useRef } from "react";
import cn from "../Header.module.scss";
import SearchIcon from "../../../assets/search.svg";

import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`${cn.list} ${cn.search}`}
        >
          <form action="" className={cn.form} onSubmit={submitHandler}>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchForm;
