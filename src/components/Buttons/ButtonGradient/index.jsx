import React from 'react';

import cn from "./ButtonGradient.module.scss";

const ButtonGradient = ({classname, children, ...props}) => (
    <button
      className={`${cn['btn-gradient']} ${classname}`}
      {...props}
    >
      {children}
    </button>
  );

export default ButtonGradient;
