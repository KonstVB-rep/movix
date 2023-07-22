import React from 'react';
import cn from './ErrorElement.module.scss'

const ErrorElement = ({classname,children}) => {

  return (
    <div className={cn[classname]}>
      {children}
    </div>
  );
};

export default ErrorElement;
