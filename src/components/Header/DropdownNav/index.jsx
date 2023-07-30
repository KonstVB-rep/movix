import React, { useEffect, useRef } from "react";
import cn from "../Header.module.scss";

const DropdownNav = ({ isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <ul className={`${cn.list} ${cn.nav__mobile}`}>
          <li className={cn.nav__mobile__item}>
            <a href="components/Header/DropdownNav/index.jsx" className={cn.nav__link}>
              Movies
            </a>
          </li>
          <li className={cn.nav__mobile__item}>
            <a href="components/Header/DropdownNav/index.jsx" className={cn.nav__link}>
              TV Shows
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default DropdownNav;
