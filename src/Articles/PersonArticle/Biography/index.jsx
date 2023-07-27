import React, {memo, useEffect, useLayoutEffect, useRef, useState} from "react";
import cn from "../PersonSection.module.scss";
import ButtonClose from "../../../components/Buttons/ButtonClose";
import {IoIosArrowDown} from "react-icons/io";


const Biography = memo(({ data }) => {

  const refContent = useRef(null);
  const refBiography = useRef(null);

  // const isBlockBtnModal = refContent.current?.offsetHeight > refBiography.current?.offsetHeight


  const [open, setOpen] = useState(false);
  // const [showMore, setShowMore] = useState(false);

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

  // const getValueShowMore = () => {
  //   console.log(refContent.current?.offsetHeight, refBiography.current?.offsetHeight)
  //   setShowMore(refContent.current?.offsetHeight > refBiography.current?.offsetHeight)
  // }

  return (
    <>
      {data ? (
        <div className={cn.biography} ref={refContent} >
          <p className={`${cn["info-item"]} ${cn.biography_short}`}>
            <span className={`${cn["info-span"]}`}>Biography:</span>{" "}
            <span className={`${cn.text} ${cn.biography_content}`} ref={refBiography}>
              {data}
            </span>
            <button
              className={cn.more__btn}
              // hidden={showMore}
              title ='Read more'
              onClick={openModal}
            ><IoIosArrowDown/></button>
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
