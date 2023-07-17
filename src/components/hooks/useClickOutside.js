import React, { useEffect } from "react";

const useClickOutside = (ref, cb) => {
  const closeHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  const closeHandlerEsc = (e) => {
    if (ref.current && !ref.current.contains(e.target) && e.code === "Escape") {
      cb();
    }
  };

  useEffect(() => {
    document.documentElement.addEventListener("mousedown", closeHandler);
    document.documentElement.addEventListener("keydown", closeHandlerEsc);
    return () => {
      document.documentElement.removeEventListener("mousedown", closeHandler);
      document.documentElement.removeEventListener("keydown", closeHandlerEsc);
    };
  });
};

export default useClickOutside;
