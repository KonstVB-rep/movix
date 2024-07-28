import React, { memo } from "react";
import useData from "./hook";

import ButtonClose from "../../../components/Buttons/ButtonClose";

import cn from "../PersonSection.module.scss";

const Biography = memo(({ data }) => {
  const { openModal, closeModal, open } = useData();

  return (
    <>
      {data ? (
        <div className={cn.biography}>
          <p className={`${cn["info-item"]} ${cn.biography_short}`}>
            <span className={`${cn["info-span"]}`}>
              <span className={cn.name}>Biography: </span>
            </span>{" "}
            <span className={`${cn.text} ${cn.biography_content}`}>{data}</span>
          </p>

          <button
            className={cn.more__btn}
            title="Read more"
            onClick={openModal}
          >
            Read more
          </button>
        </div>
      ) : null}
      {open ? (
        <div className={cn.modal} id="modal" onClick={closeModal}>
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
