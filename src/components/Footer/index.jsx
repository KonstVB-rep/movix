import React from "react";
import { Link } from "react-router-dom";

import {socialLinks} from "./socailLinks";

import cn from "./Footer.module.scss";


const navItems = ["Terms Of Use", "Privacy-Policy", "About", "Blog", "FAQ"];

const Footer = () => (
    <footer className={cn.footer}>
      <div className="wrapper">
        <ul className={cn.nav}>
          {navItems.map((item) => (
            <li key={item} className={cn.nav__item}>
              <Link>{item}</Link>
            </li>
          ))}
        </ul>
        <div className={cn.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <ul className={cn.social__icons}>
          {socialLinks.map((link) => (
            <Link
              key={link.path}
              className={cn.icon}
              rel="noopener noreferrer"
              target="_blank"
              to={link.path}
            >
              {link.icon}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );

export default Footer;
