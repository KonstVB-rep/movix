import React from "react";
import cn from "../VideoDetails.module.scss";
import dayjs from "dayjs";

const Title = ({ title, date, link, subTitle }) => {

  return (
    <>
      <h1 className={cn.title}>
        <a
          href={link}
          target="_black"
          rel="noreferrer noopener"
          title="Go to the movie's website"
        >{`${title} (${dayjs(date).format("YYYY")})`}
          <span className={cn.subtitle}>{subTitle}</span>
        </a>
      </h1>

    </>
  );
};

export default Title;
