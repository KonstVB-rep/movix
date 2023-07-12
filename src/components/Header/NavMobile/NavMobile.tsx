import React, { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

interface NavMobileProps {
  showNavMobile: boolean;
  setShowNavMobile: (value: boolean) => void;
}

const NavMobile = ({ showNavMobile, setShowNavMobile }: NavMobileProps) => {
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
        <div className="nav_mobile-dropdown" ref={navRef}>
          <ul className="nav__mobile-list">
            <li className="nav__mobile-item">
              <Link to="/explore/movie" className="nav__link">
                Movies
              </Link>
            </li>
            <li className="nav__mobile-item">
              <Link to="/explore/tv" className="nav__link">
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
