import React from "react";
import cn from "./About.module.scss";
import { Img } from "../../../../components/Img/index.jsx";
import dayjs from "dayjs";
import { Info } from "../Info/index.jsx";
import { useSelector } from "react-redux";
import { toHoursAndMinutes } from "/utils/helpers.js";
import {MdOutlineImageNotSupported} from "react-icons/md";

const dataMovieRelease = [
  {
    title: "Status",
    prop: "status",
    list: false,
    keyName: "",
    classname: "border-none",
    child(data) {
      return data[this.prop];
    },
  },
  {
    title: "Release Date",
    prop: "release_date",
    list: false,
    keyName: "",
    classname: "border-none",
    child(data) {
      return dayjs(data[this.prop]).format("MMM D, YYYY");
    },
  },
];
const dataMovieTimeRevenue = [
  {
    title: "Status",
    prop: "runtime",
    list: false,
    keyName: "",
    classname: "border-none",
    child(data) {
      return toHoursAndMinutes(data[this.prop]);
    },
  },
  {
    title: "Revenue",
    prop: "revenue",
    list: false,
    keyName: "",
    classname: "border-none",
    child(data) {
      return data[this.prop] + ' $';
    },
  },
];

const dataMovieCrew = [
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
  // {
  //   title: "Production companies",
  //   prop: "production_companies",
  //   list: false,
  //   keyName: "name",
  //   classname: "border-none",
  //   child: (data, url) => (
  //     <div className={cn.company}>
  //       {data[this.prop]?.map((company) => (
  //         <div
  //           className={cn.company__logo}
  //           key={company.name}
  //           title={company.name}
  //         >
  //           {company.logo_path ? (
  //             <Img src={url.backdrop + company.logo_path} />
  //           ) : (
  //             <div className={cn["icon-placeholder"]}>?</div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   ),
  // },
];

const About = ({ movieDetails }) => {
  const url = useSelector((state) => state.urlBaseForImages.url);
  return (
    <>
      <div className={cn["info-group"]}>
        {dataMovieRelease.map((item) => (
          <Info
            data={movieDetails[item.prop]}
            title={item.title}
            list={item.list}
            keyName={item.keyName}
            classname={item.classname}
            key={item.title}
          >
            {item.child && item.child(movieDetails)}
          </Info>
        ))}
      </div>
      <div className={cn["info-group"]}>
        {dataMovieTimeRevenue.map((item) => (
          <Info
            data={movieDetails[item.prop]}
            title={item.title}
            list={item.list}
            keyName={item.keyName}
            classname={item.classname}
            key={item.title}
          >
            {item.child && item.child(movieDetails)}
          </Info>
        ))}
      </div>
      {dataMovieCrew.map((item) => (
        <Info
          data={movieDetails[item.prop]}
          title={item.title}
          list={item.list}
          keyName={item.keyName}
          classname={item.classname}
          key={item.title}
        >
          {item.child && item.child(movieDetails)}
        </Info>
      ))}
      <Info
        data={movieDetails?.production_companies}
        title="Production companies"
        classname="border-none"
      >
        <div className={cn.company}>
          {movieDetails?.production_companies?.map((company) => (
            <div
              className={cn.company__logo}
              key={company.name}
              title={company.name}
            >
              {company.logo_path ? (
                <Img src={url.backdrop + company.logo_path} />
              ) : (
                <div className={cn["icon-placeholder"]}><MdOutlineImageNotSupported/></div>
              )}
            </div>
          ))}
        </div>
      </Info>
    </>
  );
};

export default About;
