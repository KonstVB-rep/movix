import React from "react";

import SortDown from "../../../assets/sort_down.webp";
import SortUp from "../../../assets/sort_up.webp";
import ButtonGradient from "../ButtonGradient";

import cn from "../Buttons.module.scss";

const ButtonSort = ({ toggleDirection, name, direction }) => (
  <div className={cn["btn-wrapper"]}>
    <ButtonGradient
      classname={`${cn["sort-btn"]} ${
        !direction[name] ? cn["sort-btn_inactive"] : ""
      }`}
      name={name}
      onClick={toggleDirection}
    >
      <span>{name}</span>
      <img
        alt={"Sort"}
        className={cn["sort-btn__img"]}
        src={
          direction[name] === "up" || direction[name] === "" ? SortUp : SortDown
        }
      />
    </ButtonGradient>
  </div>
);

export default ButtonSort;
