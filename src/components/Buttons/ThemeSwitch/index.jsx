import React, {useLayoutEffect, useState} from "react";
import { PiMoonStars } from "react-icons/pi";
import { CgSun } from "react-icons/cg";
import cn from "../Buttons.module.scss";
import {TbMoonFilled} from "react-icons/tb";

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light"

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const nextThem = theme === 'dark' ?  'light' : 'dark';
    document.body.dataset.theme = nextThem;
    setTheme(nextThem)
    localStorage.setItem('theme', nextThem)
  };

  useLayoutEffect(() => {
      document.body.dataset.theme = theme || defaultTheme;
      setTheme(theme || defaultTheme);
  }, [theme]);

  return (
    <button
      className={`${cn.btn} ${cn.btn_theme}`}
      onClick={toggleTheme}
      tabIndex="1"
    >
      {theme === "light" ? <TbMoonFilled /> : <CgSun />}
    </button>
  );
};

export default ThemeSwitch;
