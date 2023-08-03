import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOutsideClick from "../../Articles/hooks/commonHooks/useOutsideClick.js";
import useShowNavbarWhenScroll from "../../Articles/hooks/hooksMain/useShowNavbarWhenScroll.js";
import BurgerMenu from "../../assets/burger_menu.svg";
import CloseMenu from "../../assets/close_menu.svg";
import SearchIcon from "../../assets/search.svg";
import DropdownNav from "./DropdownNav";
import cn from "./Header.module.scss";
import SearchForm from "./SearchForm";

const Header = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
  }, [pathname]);

  const menuMobileRef = useRef(null);
  const menuBtnRef = useRef(null);
  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);

  const onCloseMenu = () => setIsMenuOpen(false);
  const onCloseSearch = () => setIsSearchOpen(false);

  useOutsideClick(isMenuOpen, menuMobileRef, menuBtnRef, onCloseMenu);
  useOutsideClick(isSearchOpen, searchRef, searchBtnRef, onCloseSearch);
  useShowNavbarWhenScroll(lastScrollY,isMenuOpen,setShow,setLastScrollY)


  return (
    <header
      className={`${cn.header} ${isMenuOpen ? cn.mobile__view : ""} ${
        cn[`${show}`]
      }`}
    >
      <div className="wrapper">
        <nav className={cn.nav}>
          <Link className={cn.logo} to="/">
            <span>Movies App</span>
          </Link>
          <ul className={cn.nav__desktop}>
            <li className={cn.nav__desktop__item}>
              <Link className={cn.nav__desktop__link} to="discover/movie">
                Movies
              </Link>
            </li>
            <li className={cn.nav__desktop__item}>
              <Link className={cn.nav__desktop__link} to="discover/tv">
                TV Shows
              </Link>
            </li>
          </ul>
          <div className={cn.buttons__mobile__menu}>
            <button
              ref={searchBtnRef}
              className={cn.button}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {!isSearchOpen ? (
                <img alt="Search" src={SearchIcon} />
              ) : (
                <img alt="Close" src={CloseMenu} />
              )}
            </button>
            <button
              ref={menuBtnRef}
              className={cn.button}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <img alt="Close" src={CloseMenu} />
              ) : (
                <img alt="Menu" src={BurgerMenu} />
              )}
            </button>
          </div>
        </nav>
      </div>
      <div ref={searchRef}>
        <SearchForm isSearchOpen={isSearchOpen} />
      </div>
      <div ref={menuMobileRef}>
        <DropdownNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>
    </header>
  );
};

export default Header;
