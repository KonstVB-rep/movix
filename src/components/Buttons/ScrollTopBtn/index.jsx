import React, { useEffect, useState } from "react";

import {PiArrowFatLinesUpBold} from "react-icons/pi";
import { debounce } from "../../../../utils/helpers.js";

import cn from "../Buttons.module.scss";

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState();

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const handleVisibleBtn = debounce(() => {
    setVisible(window.scrollY > 1000);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleBtn);
    return () => window.removeEventListener("scroll", handleVisibleBtn);
  });

  return (
    <>
      {visible ? (
        <button className={`${cn.btn} ${cn.btn_up}`} onClick={scrollUp} tabIndex='1'>
          <PiArrowFatLinesUpBold />
        </button>
      ) : null}
    </>
  );
};

export default ScrollTopBtn;
