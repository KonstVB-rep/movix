import React, { useEffect, useState } from "react";

import cn from "../Buttons.module.scss";
import { debounce } from "../../../../utils/helpers.js";
import {PiArrowFatLinesUpBold} from "react-icons/pi";

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState();

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const handleVisibleBtn = debounce(() => {
    setVisible(window.scrollY > 1000);
  }, 300);
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
