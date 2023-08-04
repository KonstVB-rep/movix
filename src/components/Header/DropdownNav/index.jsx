import React, { useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import cn from "../Header.module.scss";

const DropdownNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname,setIsMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          animate={{ opacity: 1}}
          className={`${cn.list} ${cn.nav__mobile}`}
          exit={{ opacity: 0}}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
         <li className={cn.nav__mobile__item}>
            <Link className={cn.nav__link} to="discover/movie">
              Movies
            </Link>
          </li>
            <li className={cn.nav__mobile__item}>
            <Link className={cn.nav__link} to="discover/tv">
            TV Shows
            </Link>
            </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default DropdownNav;
