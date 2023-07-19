import dayjs from "dayjs";
import {toHoursAndMinutes} from "../../../../../../utils/helpers.js";
import cn from "../About.module.scss";
import {Img} from "../../../../../components/Img/index.jsx";
import React from "react";

export const dataMovieRelease = [
  {
    title: "Status",
    prop: "status",
    list: false,
    keyName: "",
    classname: "border-none",
    child: (data) => data[this.prop],
  },
  {
    title: "Release Date",
    prop: "release_date",
    list: false,
    keyName: "",
    classname: "border-none",
    child: (data) => dayjs(data[this.prop]).format("MMM D, YYYY"),
  },
];
export const dataMovieTimeRevenue = [
  {
    title: "Status",
    prop: "runtime",
    list: false,
    keyName: "",
    classname: "border-none",
    child: (data) => toHoursAndMinutes(data[this.prop]),
  },
  {
    title: "Revenue",
    prop: "revenue",
    list: false,
    keyName: "",
    classname: "border-none",
    child: (data) => data[this.prop],
  },
];

export const dataMovieCrew = [
  {
    title: "Director",
    prop: "director",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Writer",
    prop: "writer",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Creator",
    prop: "created_by",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Country",
    prop: "production_countries",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Production companies",
    prop: "production_companies",
    list: false,
    keyName: "name",
    classname: "border-none",
    child: (data) => (
      <div className={cn.company}>
        {data[this.prop]?.map((company) => (
          <div
            className={cn.company__logo}
            key={company.name}
            title={company.name}
          >
            {company.logo_path ? (
              <Img src={url.backdrop + company.logo_path} />
            ) : (
              <div className={cn["icon-placeholder"]}>?</div>
            )}
          </div>
        ))}
      </div>
    ),
  },
];
