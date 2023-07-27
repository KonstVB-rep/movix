import React, { useEffect, useState } from "react";
import useSwitchTabs from "../../Articles/hooks/commonHooks/useSwitchTabs.js";
import useApi from "../../Articles/hooks/commonHooks/useApi.js";
import WrapperSlider from "./WrapperSlider";
import VideosCardList from "../VideosCardList";
import SwitchTabs from "../SwitchTabs";
import { useParams } from "react-router-dom";
import ErrorElement from "../ErrorElement";

const SliderCardsVideos = ({ title, keyApi, endpoints = [], tabsNames = [] }) => {
  const { movieType, id } = useParams();

  const [params, setParams] = useState([]);
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const chooseParams = () => {
    setParams(tabsNames.length ? endpoint : [movieType, id]);
  };

  const { data, isLoading, isFetching, isError, error } = useApi()[keyApi](
    ...params
  );

  useEffect(() => {
    chooseParams();
  }, [movieType, id, endpoint]);

  return (
    <ErrorElement isError={isError} error={error} title={title}>
      <WrapperSlider
        title={title}
        error={error}
        isError={isError}
        endpoint={endpoint}
        data={data?.results}
        isFetching={isFetching}
      >
        <VideosCardList
          data={data?.results}
          endpoint={endpoint[0]}
          isFetching={isFetching}
          loading={isLoading}
        />
        {tabsNames.length ? (
          <SwitchTabs data={tabsNames} onTabChange={onTabChange} />
        ) : null}
      </WrapperSlider>
    </ErrorElement>
  );
};

export default SliderCardsVideos;
