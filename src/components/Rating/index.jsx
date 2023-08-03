import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import cn from "./Rating.module.scss";

const Rating = ({ rating, classname }) => (
    <div className={`${cn.rating} ${cn[classname]}`}>
      <CircularProgressbar
        maxValue={10}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
        text={rating}
        value={rating}
      />
    </div>
  );

export default Rating;
