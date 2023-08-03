import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import avatar from "../../../assets/avatar.webp";
import ErrorElement from "../../../components/ErrorElement";
import Img from "../../../components/Img/index.jsx";
import useApi from "../../hooks/commonHooks/useApi.js";
import Biography from "../Biography/index.jsx";
import cn from "../PersonSection.module.scss";
import Skeleton from "../Skeleton/index.jsx";

const Profile = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useApi().usePerson(id);

  const urlProfile = useSelector(
    (state) => state.urlBaseForImages.url?.profile
  );

  return (
    <ErrorElement
      classname="main"
      error={error}
      isError={isError}
      title="Profile"
    >
      <div className={`${cn.profile} wrapper`}>
        <div className={cn["opacity-backdrop"]}>
          <Img
            src={data?.profile_path ? urlProfile + data?.profile_path : null}
          />
        </div>
        <h1 className="title-article">Profile</h1>
        {!isLoading ? (
          <div className={cn.profile__content}>
            <div className={cn.profile__content__photo}>
              <Img
                src={
                  data?.profile_path ? urlProfile + data?.profile_path : avatar
                }
              />
            </div>
            <div className={cn.profile__content__info}>
              <p className={cn["info-item"]}>
                <span className={cn.name}>Name:</span>
                <span className={cn.text}>{data?.name}</span>
              </p>
              <p className={cn["info-item"]}>
                <span className={cn.name}>Gender:</span>
                <span className={cn.text}>
                  {data?.gender === 1 ? "Female" : "Male"}
                </span>
              </p>
              {data?.birthday ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Birthday: </span>
                  <span className={cn.text}>
                    {dayjs(data?.birthday).format("MMM D, YYYY")}
                  </span>
                </p>
              ) : null}
              {data?.deathday ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Deathday: </span>
                  <span className={cn.text}>
                    {dayjs(data?.deathday).format("MMM D, YYYY")}
                  </span>
                </p>
              ) : null}
              {data?.imdb_id ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Imdb_id : </span>
                  <span className={cn.text}>
                    <Link
                      to={`https://www.imdb.com/name/${data.imdb_id}`}
                      className={cn.link_pink}
                      title="Go to imdb.com"
                    >
                      ID {data.imdb_id}
                    </Link>
                  </span>
                </p>
              ) : null}
              {data?.place_of_birth ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Place of birth: </span>
                  <span className={cn.text}>{data?.place_of_birth}</span>
                </p>
              ) : null}
              {data?.homepage ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Homepage: </span>
                  <span className={cn.text}>
                    <Link
                      className={cn.link_pink}
                      to={data?.homepage}
                      title="Go to the actor's home page"
                    >
                      {data?.homepage}
                    </Link>
                  </span>
                </p>
              ) : null}
              <Biography data={data?.biography} />
              {data?.popularity ? (
                <p className={cn["info-item"]}>
                  <span className={cn.name}>Popularity:</span>
                  <span className={cn.text}>{data?.popularity}</span>
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </ErrorElement>
  );
};

export default Profile;
