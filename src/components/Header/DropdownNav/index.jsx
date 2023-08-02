import React, { useEffect } from "react";
import cn from "../Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const DropdownNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.2 }}
          className={`${cn.list} ${cn.nav__mobile}`}
        >
         <li className={cn.nav__mobile__item}>
            <Link to="discover/movie" className={cn.nav__link}>
              Movies
            </Link>
          </li>
            <li className={cn.nav__mobile__item}>
            <Link to="discover/tv" className={cn.nav__link}>
            TV Shows
            </Link>
            </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default DropdownNav;
