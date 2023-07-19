import React from 'react';
import cn from './ErrorSection.module.scss'

const ErrorSection = ({classname,children}) => {

  return (
    <div className={cn[classname]}>
      {children}
    </div>
  );
};

export default ErrorSection;
