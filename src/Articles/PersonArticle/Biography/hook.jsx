import { useState, useEffect } from "react";

const useData = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeModal = (e) => {
    if (e.target.id !== "modal-biography") {
      setOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  const keyDowmClose = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", keyDowmClose);
    return () => document.body.removeEventListener("keydown", keyDowmClose);
  }, []);

  return { openModal, closeModal, open };
};

export default useData;
