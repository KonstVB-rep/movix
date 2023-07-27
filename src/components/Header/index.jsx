import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cn from "./Header.module.scss";

import Nav from "./Nav";
import SearchForm from "./SearchForm";
import NavMobile from "./NavMobile";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !showNavMobile) {
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
    <header className={`${cn.header} ${showNavMobile ? cn.mobile__view : ""} ${cn[`${show}`]}`}>
      <div className="wrapper">
        <nav className= {cn.nav}>
          <Link className={cn.logo} to="/">
            <span>Movies App</span>
          </Link>
          <Nav
            setShowSearch={setShowSearch}
            showSearch={showSearch}
            setShowNavMobile={setShowNavMobile}
            showNavMobile={showNavMobile}
          />
        </nav>
      </div>
      <SearchForm setShowSearch={setShowSearch} showSearch={showSearch} />
      <NavMobile
        showNavMobile={showNavMobile}
        setShowNavMobile={setShowNavMobile}
      />
    </header>
  );
};

export default Header;
