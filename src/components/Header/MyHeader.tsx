import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/movix-logo.svg";
import { Nav } from "./Nav";
import { SearchForm } from "./SearchForm";
import { NavMobile } from "./NavMobile";

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showNavMobile, setShowNavMobile] = useState<boolean>(false);
  const [show, setShow] = useState<string>("top");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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
  }, []);

  return (
    <header className={`header ${showNavMobile ? "mobile__view" : ""} ${show}`}>
      <div className="wrapper">
        <nav className="nav">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
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
