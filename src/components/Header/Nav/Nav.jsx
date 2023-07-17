import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import cn from "../Header.module.scss";


const Nav = ({
  setShowSearch,
  showSearch,
  setShowNavMobile,
  showNavMobile,
}) => {
  return (
    <ul className={cn.nav__list}>
      <li className={cn.nav__item}>
        <Link to="/explore/movie" className={cn.nav__link}>
          Movies
        </Link>
      </li>
      <li className={cn.nav__item}>
        <Link to="/explore/tv" className={cn.nav__link}>
          TV Shows
        </Link>
      </li>
      {!showSearch && (
        <li className= {cn["nav__item-mobile"]}>
          <button className={cn.nav__btn} onClick={() => setShowSearch(true)}>
            <HiOutlineSearch className= {cn["nav__btn-icon"]} />
          </button>
        </li>
      )}
      <li className= {cn["nav__item-mobile"]}>
        <button
          className={cn.nav__btn}
          onClick={() => setShowNavMobile((show) => !show)}
        >
          {showNavMobile ? (
            <VscChromeClose className={cn["nav__btn-icon"]} />
          ) : (
            <SlMenu className={cn["nav__btn-icon"]} />
          )}
        </button>
      </li>
    </ul>
  );
};

export default Nav;
