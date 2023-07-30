import React, { memo, useEffect, useRef, useState } from "react";
import cn from "../PersonSection.module.scss";
import ButtonClose from "../../../components/Buttons/ButtonClose";

const Biography = memo(({ data }) => {
  const refContent = useRef(null);
  const refBiography = useRef(null);

  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

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

  useEffect(() => {
    const obj = refContent?.current?.getBoundingClientRect();
    setShowMore(refContent?.current?.scrollHeight > obj?.height);
  }, [showMore]);

  return (
    <>
      {data ? (
        <div className={cn.biography}>
          <p
            className={`${cn["info-item"]} ${cn.biography_short}`}
            ref={refContent}
          >
            <span className={`${cn["info-span"]}`}>Biography:</span>{" "}
            <span
              className={`${cn.text} ${cn.biography_content}`}
              ref={refBiography}
            >
              {data}
            </span>
            {showMore ? (
              <button
                className={cn.more__btn}
                title="Read more"
                onClick={openModal}
              >
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h256v256H0z" />
                  <path
                    fill="none"
                    stroke="#ec5f2b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="m96 48 80 80-80 80"
                  />
                </svg>
              </button>
            ) : null}
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
