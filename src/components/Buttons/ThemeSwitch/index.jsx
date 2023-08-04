import React, { useLayoutEffect, useState } from "react";

import cn from "../Buttons.module.scss";

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const nextThem = theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = nextThem;
    setTheme(nextThem);
    localStorage.setItem("theme", nextThem);
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = theme || defaultTheme;
    setTheme(theme || defaultTheme);
  }, [theme]);

  return (
    <button
      className={`${cn.btn} ${cn.btn_theme}`}
      tabIndex="1"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M399.103 270.951a7.002 7.002 0 0 0-7.846.497 106.379 106.379 0 0 1-65.756 22.477A107.547 107.547 0 0 1 218.076 186.5a106.379 106.379 0 0 1 22.477-65.756 7 7 0 0 0-6.612-11.205 147.424 147.424 0 0 0-124.487 145.616c0 81.272 66.12 147.391 147.392 147.391A147.424 147.424 0 0 0 402.462 278.06a7 7 0 0 0-3.359-7.109Z"/></svg>
      ) : (
        <svg
          className="feather feather-sun"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap ="round"
          strokeLinejoin ="round"
          strokeWidth ="2"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitch;
