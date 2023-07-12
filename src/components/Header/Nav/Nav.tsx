import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

interface NavProps {
  showNavMobile: boolean;
  showSearch: boolean;
  setShowNavMobile: (value: (show) => boolean) => void;
  setShowSearch: (value: boolean) => void;
}

const Nav = ({
  setShowSearch,
  showSearch,
  setShowNavMobile,
  showNavMobile,
}: NavProps) => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/explore/movie" className="nav__link">
          Movies
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/explore/tv" className="nav__link">
          TV Shows
        </Link>
      </li>
      {!showSearch && (
        <li className="nav__item-mobile">
          <button className="nav__btn" onClick={() => setShowSearch(true)}>
            <HiOutlineSearch className="nav__btn-icon" />
          </button>
        </li>
      )}
      <li className="nav__item-mobile">
        <button
          className="nav__btn"
          onClick={() => setShowNavMobile((show) => !show)}
        >
          {showNavMobile ? (
            <VscChromeClose className="nav__btn-icon" />
          ) : (
            <SlMenu className="nav__btn-icon" />
          )}
        </button>
      </li>
    </ul>
  );
};

export default Nav;
