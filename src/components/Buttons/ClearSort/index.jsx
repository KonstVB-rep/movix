import React from 'react';

import ButtonGradient from "../ButtonGradient";

import cn from "../Buttons.module.scss";

const CLearSort = ({clearSort}) => (
    <ButtonGradient classname={`${cn["sort-btn"]} ${cn["sort-btn_clear"]}`} onClick={() => clearSort()}>
      <span>Clear sort</span>
    </ButtonGradient>
  );

export default CLearSort;
