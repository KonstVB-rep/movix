import React, { useEffect, useRef, useState } from "react";
import DropdownNav from "./DropdownNav";
import SearchForm from "./SearchForm";
import cn from "./Header.module.scss";
import SearchIcon from "../../assets/search.svg";
import CloseMenu from "../../assets/close_menu.svg";
import BurgerMenu from "../../assets/burger_menu.svg";
import {Link, useLocation} from "react-router-dom";

const Header =() => {

  const {pathname} = useLocation()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSearchOpen(false)
  }, [pathname]);

  const ref = useRef(null);
  const refMenu = useRef(null);
  const searchRef = useRef(null);
  const searchBtn = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isMenuOpen &&
        ref?.current &&
        !ref?.current?.contains(e.target) &&
        e.target !== refMenu?.current
      ) {
        setIsMenuOpen(false);
      }

      if (
        isSearchOpen &&
        searchRef?.current &&
        !searchRef?.current?.contains(e.target) &&
        e.target !== searchBtn?.current
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isMenuOpen, isSearchOpen]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isMenuOpen) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`${cn.header} ${isMenuOpen ? cn.mobile__view : ""} ${
        cn[`${show}`]
      }`}
    >
      <div className="wrapper">
        <nav className={cn.nav}>
          <Link to="/" className={cn.logo}>
            <span>Movies App</span>
          </Link>
          <ul className={cn.nav__desktop}>
            <li className={cn.nav__desktop__item}>
              <Link to="discover/movie" className={cn.nav__desktop__link}>
                Movies
              </Link>
            </li>
            <li className={cn.nav__desktop__item}>
              <Link to="discover/tv" className={cn.nav__desktop__link}>
                TV Shows
              </Link>
            </li>
          </ul>
          <div className={cn.buttons__mobile__menu}>
            <button
              className={cn.button}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              ref={searchBtn}
            >
              {!isSearchOpen ? (
                <img src={SearchIcon} alt="Search" />
              ) : (
                <img src={CloseMenu} alt="Close" />
              )}
            </button>
            <button
              className={cn.button}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              ref={refMenu}
            >
              {isMenuOpen ? (
                <img src={CloseMenu} alt="Close" />
              ) : (
                <img src={BurgerMenu} alt="Menu" />
              )}
            </button>
          </div>
        </nav>
      </div>
      <div ref={searchRef}>
        <SearchForm isSearchOpen={isSearchOpen} />
      </div>
      <div ref={ref}>
        <DropdownNav isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
