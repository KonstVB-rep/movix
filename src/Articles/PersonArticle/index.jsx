import React from "react";
import {Link, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import useApi from "../hooks/commonHooks/useApi.js";
import avatar from "../../assets/avatar.png";
import cn from "./PersonSection.module.scss";
import dayjs from "dayjs";
import Img from "../../components/Img";
import Biography from "./Biography";
import CreditsList from "./CreditsList";


const PersonSection = () => {
  const { id } = useParams();

  const urlProfile = useSelector(
    (state) => state.urlBaseForImages.url?.profile
  );

  const { data, isLoading } = useApi().person(id);

  return (
  <>
    <div className={cn.profile}>
      <div className={cn.profile__foto}>
        <Img
          src={data?.profile_path ? urlProfile + data?.profile_path : avatar}
        />
      </div>
      <div className={cn.profile__info}>
        <p className={cn["info-item"]}>
          Name: <span className={cn.text}>{data?.name}</span>
        </p>
        <p className={cn["info-item"]}>
          Gender:{" "}
          <span className={cn.text}>
            {data?.gender === 1 ? "Female" : "Male"}
          </span>
        </p>
        {data?.birthday ? (
          <p className={cn["info-item"]}>
            Birthday:{" "}
            <span className={cn.text}>
              {dayjs(data?.birthday).format("MMM D, YYYY")}
            </span>
          </p>
        ) : null}
        {data?.deathday ? (
          <p className={cn["info-item"]}>
            Deathday:{" "}
            <span className={cn.text}>
              {dayjs(data?.deathday).format("MMM D, YYYY")}
            </span>
          </p>
        ) : null}
        {data?.imdb_id
          ? (
            <p className={cn["info-item"]}>
              Imdb_id
              :{" "}
              <span className={cn.text}>
              <Link to={`https://www.imdb.com/name/${data.imdb_id}`}>ID {data.imdb_id}</Link>
            </span>
            </p>
          ) : null}
        {data?.place_of_birth ? (
          <p className={cn["info-item"]}>
            Place of birth:{" "}
            <span className={cn.text}>{data?.place_of_birth}</span>
          </p>
        ) : null}
        <Biography data={data?.biography} />
        {data?.popularity ? (
          <p className={cn["info-item"]}>
            Popularity:{" "}
            <span className={cn.text}>{data?.popularity}</span>
          </p>
        ) : null}
      </div>
    </div>
    <CreditsList endpoints={["movie", "tv"]} media_type={["Movies", "TV Shows"]}/>
    </>
  );
};

export default PersonSection;

