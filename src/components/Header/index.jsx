import { Link } from "react-router-dom";
import useData from "./hook.jsx";
import BurgerMenu from "../../assets/burger_menu.svg";
import CloseMenu from "../../assets/close_menu.svg";
import SearchIcon from "../../assets/search.svg";
import DropdownNav from "./DropdownNav";
import cn from "./Header.module.scss";
import SearchForm from "./SearchForm";

const Header = () => {
  const {
    menuMobileRef,
    menuBtnRef,
    searchRef,
    searchBtnRef,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    show,
  } = useData();

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
        <DropdownNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
