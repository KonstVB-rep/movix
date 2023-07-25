import React, { memo, useRef, useState } from "react";
import cn from "../PersonSection.module.scss";
import ButtonClose from "../../../components/Buttons/ButtonClose";


const Biography = memo(({ data }) => {

  const refContent = useRef(null);
  const refBiography = useRef(null);

  const isBlockBtnModal = refContent.current?.offsetHeight >= refBiography.current?.offsetHeight

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

  return (
    <>
      {data ? (
        <div className={cn.biography} ref={refContent}>
          <button
            className={cn.biography__btn}
            hidden={isBlockBtnModal}
            title ='Open full text biography'
            onClick={openModal}
          />
          <p className={`${cn["info-item"]} ${cn.biography_short}`}>
            <span className={`${cn["info-span"]}`}>Biography:</span>{" "}
            <span className={cn.text} ref={refBiography}>
              {data}
            </span>
          </p>
        </div>
      ) : null}
      {open ? (
        <div className={cn.modal} onClick={closeModal} id="modal">
          <div className={cn.modal__content}>
            <ButtonClose close={closeModal} />
            <pre className={cn.modal__text} id="modal-biography">
                  {data}
                </pre>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Biography;
