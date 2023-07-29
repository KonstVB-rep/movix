import React from 'react';
import cn from './Loader.module.scss'

const Loader = () => {

  return (
    <div className={cn["wrapper-loader"]}>
      <span className = {cn.loader}></span>
    </div>
  );
};

export default Loader;
