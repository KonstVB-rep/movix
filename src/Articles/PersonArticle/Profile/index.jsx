import React from 'react';
import cn from "../PersonSection.module.scss";
import Img from "../../../components/Img/index.jsx";
import avatar from "../../../assets/avatar.webp";
import dayjs from "dayjs";
import {Link, useParams} from "react-router-dom";
import Biography from "../Biography/index.jsx";
import {useSelector} from "react-redux";
import ErrorElement from "../../../components/ErrorElement";
import useApi from "../../hooks/commonHooks/useApi.js";
import Skeleton from "../Skeleton/index.jsx";

const Profile = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useApi().person(id);

  const urlProfile = useSelector(
    (state) => state.urlBaseForImages.url?.profile
  );

  return (
    <ErrorElement
      isError={isError}
      error={error}
      title='Profile'
      classname='main'
    >
    <div className={`${cn.profile} wrapper`}>
      <div className={cn['opacity-backdrop']}>
        <Img
          src = {
            data?.profile_path ? urlProfile + data?.profile_path : null
          }
        />
      </div>
      <h1 className="title-article">Profile</h1>
      {!isLoading ? <div className = {cn.profile__content}>
        <div className = {cn.profile__content__photo}>
          <Img
            src = {
              data?.profile_path ? urlProfile + data?.profile_path : avatar
            }
          />
        </div>
        <div className = {cn.profile__content__info}>
          <p className = {cn["info-item"]}>
            Name: <span className = {cn.text}>{data?.name}</span>
          </p>
          <p className = {cn["info-item"]}>
            Gender:{" "}
            <span className = {cn.text}>
                {data?.gender === 1 ? "Female" : "Male"}
              </span>
          </p>
          {data?.birthday ? (
            <p className = {cn["info-item"]}>
              Birthday:{" "}
              <span className = {cn.text}>
                  {dayjs(data?.birthday).format("MMM D, YYYY")}
                </span>
            </p>
          ) : null}
          {data?.deathday ? (
            <p className = {cn["info-item"]}>
              Deathday:{" "}
              <span className = {cn.text}>
                  {dayjs(data?.deathday).format("MMM D, YYYY")}
                </span>
            </p>
          ) : null}
          {data?.imdb_id ? (
            <p className = {cn["info-item"]}>
              Imdb_id :{" "}
              <span className = {cn.text}>
                  <Link to = {`https://www.imdb.com/name/${data.imdb_id}`}>
                    ID {data.imdb_id}
                  </Link>
                </span>
            </p>
          ) : null}
          {data?.place_of_birth ? (
            <p className = {cn["info-item"]}>
              Place of birth:{" "}
              <span className = {cn.text}>{data?.place_of_birth}</span>
            </p>
          ) : null}
          {data?.homepage ? (
            <p className = {cn["info-item"]}>
              Homepage:{" "}
              <span className = {cn.text}><a href = {data?.homepage} title="Go to the actor's home page" className={cn.link_pink}>{data?.homepage}</a></span>
            </p>
          ) : null}
          <Biography data = {data?.biography} />
          {data?.popularity ? (
            <p className = {cn["info-item"]}>
              Popularity: <span className = {cn.text}>{data?.popularity}</span>
            </p>
          ) : null}
        </div>
      </div> : <Skeleton/>}
    </div>
    </ErrorElement>
  );
};

export default Profile;
