import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import {SwitchTabs} from "../../../components/SwitchTabs";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {VideosCardList} from "../../../components/VideosCardList";

const TopRated = () => {
  const { data, endpoint, isLoading, isFetching, onTabChange, isError, error } = useGetKeyData().topRated
  console.log('render')
  return (
    <WrapperSlider
      title={"Top Rated"}
      error={error}
      isError={isError}
      loading={isLoading}
      endpoint={endpoint}
      data={data?.results}
      isFetching={isFetching}
    >
      <VideosCardList data={data?.results} endpoint={endpoint} isFetching={isFetching} loading={isLoading}/>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default TopRated;
