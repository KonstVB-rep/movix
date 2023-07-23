import React from "react";
import { useParams } from "react-router-dom";

import { Img } from "../../../components/Img";
import { useSelector } from "react-redux";

import Poster from "./Poster/Poster.jsx";
import { useGetData } from "../../hooks/useGetData.js";
import { Skeleton } from "./Skeleton/index.jsx";
import {Description} from "./Desciption/";

import cn from "./VideoDetails.module.scss";

const VideoDetails = () => {
  const { movieType, id } = useParams();
  const { url } = useSelector((state) => state.urlBaseForImages);

  const { data, isLoading, isError, error, isFetching } = useGetData(
    movieType,
    `/${movieType}/${id}`,
    id
  );

  return (
    <div className={cn.details}>
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        <>
          {data && (
            <>
              <div className={cn.backdrop}>
                <Img src={url?.backdrop + data?.backdrop_path} />
              </div>
              <div className={cn["opacity-layer"]}></div>
              <div className={`${cn.wrapper} wrapper`}>
                <div className={cn.content}>
                  <Poster poster={data.poster_path} />
                  <Description data={data} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VideoDetails;
