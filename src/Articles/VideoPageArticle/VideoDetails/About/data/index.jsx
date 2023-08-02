import dayjs from "dayjs";
import {toHoursAndMinutes} from "/utils/helpers.js";

export const dataMovieRelease = [
  {
    title: "Status:",
    prop: "status",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return data[this.prop];
    },
  },
  {
    title: "Release Date:",
    prop: "release_date",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return dayjs(data[this.prop]).format("MMM D, YYYY");
    },
  },
  {
    title: "Runtime:",
    prop: "runtime",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return toHoursAndMinutes(data[this.prop]);
    },
  },
  {
    title: "Country:",
    prop: "production_countries",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Creator:",
    prop: "created_by",
    list: true,
    keyName: "name",
    classname: "",
  },
];

export const dataMovieCrew = [
  {
    title: "Director:",
    prop: "director",
    list: true,
    keyName: "name",
    classname: "",
  },
  {
    title: "Writers:",
    prop: "writers",
    list: true,
    keyName: "name",
    classname: "",
  },
];


export const dataDurationOsSeries = [
  {
    title: "Seasons:",
    prop: "number_of_seasons",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return data[this.prop];
    },
  },
  {
    title: "Number Episodes:",
    prop: "number_of_episodes",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return data[this.prop];
    },
  },
  {
    title: "Air Date:",
    prop: "first_air_date",
    list: false,
    keyName: "",
    classname: "",
    child(data) {
      return data[this.prop];
    },
  },
];
