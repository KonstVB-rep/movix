import React, { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import useClickOutside from "../../../Articles/hooks/useClickOutside.js";
import cn from "../Header.module.scss";

const NavMobile = ({ showNavMobile, setShowNavMobile }) => {
  const navRef = useRef(null);
  const { pathname } = useLocation();

  useClickOutside(navRef, () => {
    if (showNavMobile) {
      setShowNavMobile(false);
    }
  });

  useEffect(() => {
    setShowNavMobile(false);
  }, [pathname]);

  return (
    <>
      {showNavMobile && (
        <div className= {cn["nav_mobile-dropdown"]} ref={navRef}>
          <ul className= {cn["nav__mobile-list"]}>
            <li className= {cn["nav__mobile-item"]}>
              <Link to="/explore/movie" className= {cn.nav__link}>
                Movies
              </Link>
            </li>
            <li className={cn["nav__mobile-item"]}>
              <Link to="/explore/tv" className={cn.nav__link}>
                TV Shows
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMobile;
