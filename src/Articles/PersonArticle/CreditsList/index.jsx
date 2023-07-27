import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";
import VideosCardList from "../../../components/VideosCardList";
import cn from "../PersonSection.module.scss";
import SwitchTabs from "../../../components/SwitchTabs";
import useSwitchTabs from "../../hooks/commonHooks/useSwitchTabs.js";

const CreditsList = ({ endpoints, media_type }) => {
  const { id } = useParams();
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const { data, isLoading, isError, error, isFetching } =
    useApi().video_credits_person(id, endpoint[0]);

  return (
    <>
      {data?.cast ? (
        <>
          {" "}
          <div className={cn.heading}>
            <h2 className={cn.title}>
              {endpoint[0] === "movie" ? "Movies" : "TV Show"}
            </h2>
            <SwitchTabs data={media_type} onTabChange={onTabChange} />
          </div>
          <div className='grid'>
            <VideosCardList
              data={data?.cast}
              endpoint={endpoint}
              countSkeleton={6}
              isFetching={isFetching}
              loading={isLoading}
              classname='card_grid'
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default CreditsList;
