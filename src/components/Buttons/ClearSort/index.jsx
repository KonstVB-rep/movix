import React from 'react';
import cn from "../Buttons.module.scss";
import ButtonGradient from "../ButtonGradient/index.jsx";

const CLearSort = ({clearSort}) => {
  return (
    <ButtonGradient classname={`${cn["sort-btn"]} ${cn["sort-btn_clear"]}`} onClick={() => clearSort()}>
      <span>Clear sort</span>
    </ButtonGradient>
  );
};

export default CLearSort;
