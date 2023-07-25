import React from 'react';
import cn from "./ButtonClose.module.scss";
import {IoCloseCircleSharp} from "react-icons/io5";

const ButtonClose = ({close}) => {
  return (
    <button className={cn.close} onClick={close}>
      <IoCloseCircleSharp/>
    </button>
  );
};

export default ButtonClose;
