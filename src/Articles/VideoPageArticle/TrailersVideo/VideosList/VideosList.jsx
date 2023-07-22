import React from 'react';
import {Skeleton} from "../Skeleton";
import {VideoCard} from "../VideoCard";
import useGetKeyData from "../../../hooks/useGetKeyData.js";
import {useParams} from "react-router-dom";
import cn from "../TrailersVideo.module.scss";

const VideosList = () => {
  const {movieType, id} = useParams();

  const {data,isLoading} = useGetKeyData().trailers_list(movieType, id)

  return (
    <>
      {!isLoading ?
        (<div>
            <ul className={cn.videos}>
              {data?.results?.map((trailer) => (
                <VideoCard key={trailer.id} data={trailer}/>
              ))}
            </ul>
          </div>
        ) :  <Skeleton/>}
    </>
  );
};

export default VideosList;
