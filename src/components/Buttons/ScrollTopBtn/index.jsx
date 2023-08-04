import React, { useEffect, useState } from "react";

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
        <button
          className={`${cn.btn} ${cn.btn_up}`}
          tabIndex="1"
          onClick={scrollUp}
        >
          <svg
            baseProfile="tiny"
            height="24"
            version="1.2"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3.172 5.586 9.586a2 2 0 1 0 2.828 2.828L10 10.828v7.242a2 2 0 0 0 4 0v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L12 3.172z" />
          </svg>
        </button>
      ) : null}
    </>
  );
};

export default ScrollTopBtn;
