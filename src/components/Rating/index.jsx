import React, {memo} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import cn from "./Rating.module.scss";

const Rating = memo(({ rating, classname }) => {

  return (
    <div className={`${cn.rating} ${cn[classname]}`}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor:
            rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
});

export default Rating;
