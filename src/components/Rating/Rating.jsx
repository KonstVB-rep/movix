import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import cn from "./Rating.module.scss";

const Rating = ({ rating }) => {
  return (
    <div className={cn.rating}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        className={cn.text}
        styles={buildStyles({
          pathColor:
            rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default Rating;
