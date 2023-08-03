import dayjs from "dayjs";
import React from "react";
import cn from "../VideoDetails.module.scss";

const Title = ({ title, date, link, subTitle }) => (
    <>
      <h1 className={cn.title}>
        <a
          href={link}
          rel="noreferrer noopener"
          target="_black"
          title="Go to the movie's website"
        >{`${title} (${dayjs(date).format("YYYY")})`}
          <span className={cn.subtitle}>{subTitle}</span>
        </a>
      </h1>

    </>
  );

export default Title;
