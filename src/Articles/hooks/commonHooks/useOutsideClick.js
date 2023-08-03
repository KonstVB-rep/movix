import { useEffect } from "react";

const useOutsideClick = (condition, ref, refBtn, cb) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        condition &&
        ref?.current &&
        !ref?.current?.contains(e.target)
        &&
        e.target !== refBtn?.current
      ) {
        cb();
      }
    };

    const closeHandlerEsc = (e) => {
      if (condition && ref?.current && e.code === "Escape") {
        cb();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    document.documentElement.addEventListener("keydown", closeHandlerEsc);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
      document.documentElement.removeEventListener("keydown", closeHandlerEsc);
    };
  }, [condition]);
};

export default useOutsideClick;
