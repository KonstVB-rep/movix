import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useOutsideClick from "../../Articles/hooks/commonHooks/useOutsideClick.js";
import useShowNavbarWhenScroll from "../../Articles/hooks/hooksMain/useShowNavbarWhenScroll.js";

const useData = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
  }, [pathname]);

  const menuMobileRef = useRef(null);
  const menuBtnRef = useRef(null);
  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);

  const onCloseMenu = () => setIsMenuOpen(false);
  const onCloseSearch = () => setIsSearchOpen(false);

  useOutsideClick(isMenuOpen, menuMobileRef, menuBtnRef, onCloseMenu);
  useOutsideClick(isSearchOpen, searchRef, searchBtnRef, onCloseSearch);
  useShowNavbarWhenScroll(lastScrollY, isMenuOpen, setShow, setLastScrollY);

  return {
    menuMobileRef,
    menuBtnRef,
    searchRef,
    searchBtnRef,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    show,
  };
};

export default useData;
