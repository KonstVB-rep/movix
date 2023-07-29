import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";
import VideosCardList from "../../../components/VideosCardList";
import cn from "../PersonSection.module.scss";
import SwitchTabs from "../../../components/SwitchTabs";
import useSwitchTabs from "../../hooks/commonHooks/useSwitchTabs.js";
import ErrorElement from "../../../components/ErrorElement";
import SkeletonsListMedia from "../../../components/SkeletonsListMedia";

const CreditsList = ({ endpoints, media_type }) => {
  const { id } = useParams();
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const { data, isLoading, isError, error, isFetching } =
    useApi().video_credits_person(id, endpoint[0]);

  return (
    <ErrorElement isError={isError} error={error} title="Profile">
      <SkeletonsListMedia tabsNames={endpoints} isLoading={isLoading} isFetching={isFetching}/>
      <div className={cn.heading}>
        <h2 className="title-article">
          {endpoint[0] === "movie" ? "Movies" : "TV Show"}
        </h2>
        <SwitchTabs data={media_type} onTabChange={onTabChange} />
      </div>
      <div className="grid">
        <VideosCardList
          dataList={data?.cast}
          endpointCard={endpoint}
          isFetching={isFetching}
          loading={isLoading}
          classname="skeletons__item_grid"
          classnameCard="card_grid"
        />
      </div>
    </ErrorElement>
  );
};

export default CreditsList;
