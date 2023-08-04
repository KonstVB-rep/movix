import React from 'react';

import cn from './FallbackSuspense.module.scss'

const FallbackSuspense = () => (
    <div className={cn.wrapper}>
      <span className ={cn.loader}></span>
    </div>
  );

export default FallbackSuspense;
