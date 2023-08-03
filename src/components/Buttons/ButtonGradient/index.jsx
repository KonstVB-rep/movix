import React from 'react';
import cn from "./ButtonGradient.module.scss";

const ButtonGradient = ({classname, children, ...props}) => {
  return (
    <button
      className={`${cn['btn-gradient']} ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonGradient;
