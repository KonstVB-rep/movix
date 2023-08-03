import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ErrorElement from "../../../components/ErrorElement";
import Img from "../../../components/Img";

import { useGetData } from "../../hooks/commonHooks/useGetData.js";
import Description from "./Desciption/";
import Poster from "./Poster";
import Skeleton from "./Skeleton";

import cn from "./VideoDetails.module.scss";

const VideoDetails = () => {
  const { movieType, id } = useParams();
  const urlBackdrop = useSelector(
    (state) => state.urlBaseForImages.url?.backdrop
  );

  const { data, isLoading, isError, error, isFetching } = useGetData(
    movieType,
    `/${movieType}/${id}`,
    id
  );

  return (
    <ErrorElement
      classname="main"
      error={error}
      isError={isError}
      title="Video description"
    >
      <div className={cn.details}>
        <div className={cn.backdrop}>
          <Img src={`${urlBackdrop}${data?.backdrop_path}`} />
        </div>
        <div className={cn["opacity-layer"]}></div>
        <div className="wrapper">
          <h1 className="title-article">{`${movieType.toUpperCase()} description`}</h1>
          {isLoading || isFetching ? (
            <Skeleton />
          ) : (
            <div className={cn.content}>
              <div className={cn.indicators}>
                <Poster poster={data?.poster_path} />
                <Description data={data} />
              </div>
              <div className={cn.overview}>
                <div className="title-article">Overview</div>
                <div className={cn.description}>{data?.overview}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorElement>
  );
};

export default VideoDetails;
