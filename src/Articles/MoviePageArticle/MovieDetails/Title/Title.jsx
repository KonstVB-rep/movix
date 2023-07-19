import React from 'react';
import cn from "../MovieDetails.module.scss";
import dayjs from "dayjs";

const Title = ({title, date, subTitle}) => {
  return (
    <>
      <h1 className={cn.title}>
        {`${title} (${dayjs(
         date
        ).format("YYYY")})`}
      </h1>
      <h2 className={cn.subtitle}>{subTitle}</h2>
    </>
  );
};

export default Title;
