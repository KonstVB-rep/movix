import React from 'react';
import cn from "../Buttons.module.scss";
import SortUp from "../../../assets/sort_up.webp";
import SortDown from "../../../assets/sort_down.webp";
import ButtonGradient from "../ButtonGradient/index.jsx";

const ButtonSort =({toggleDirection, name, direction}) => {

  return (
    <div
      className={cn['btn-wrapper']}
    >
      <ButtonGradient  onClick={toggleDirection} name={name} classname={`${cn["sort-btn"]} ${!Boolean(direction[name]) ? cn["sort-btn_inactive"] :''}`}>
        <span>{name}</span>
        <img
          src={(direction[name] === 'up' || direction[name] === '') ? SortUp :SortDown}
          alt={"Sort"}
          className={cn["sort-btn__img"]}
        />
      </ButtonGradient>
      {/*<button*/}
      {/*  className={`${cn["sort-btn"]} ${!Boolean(direction[name]) ? cn["sort-btn_inactive"] :''}`}*/}
      {/*  name={name}*/}
      {/*  onClick={toggleDirection}*/}
      {/*>*/}
      {/*  <span>{name}</span>*/}
      {/*  <img*/}
      {/*    src={(direction[name] === 'up' || direction[name] === '') ? SortUp :SortDown}*/}
      {/*    alt={"Sort asc"}*/}
      {/*    className={cn["sort-btn__img"]}*/}
      {/*  />*/}
      {/*</button>*/}
    </div>
  )
}

export default ButtonSort;
