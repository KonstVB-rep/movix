import React, {useState} from 'react';
import {PiMoonStars} from "react-icons/pi";
import {CgSun} from "react-icons/cg";
import cn from "../Buttons.module.scss";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => theme === 'light' ? 'dark' : 'light'

  return (
    <button className={`${cn.btn} ${cn.btn_theme}`} onClick = {toggleTheme} tabIndex='1'>
      {theme === 'light' ?<PiMoonStars/> :<CgSun/>}
    </button>
  );
};

export default ThemeSwitch;
