import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import {SwitchTabs} from "../../../components/SwitchTabs";
import useGetKeyData from "../../hooks/commonHooks/useGetKeyData.js";
import {VideosCardList} from "../../../components/VideosCardList";

const Popular = () => {

  const { data, endpoint, isLoading, isError, onTabChange, error,isFetching } = useGetKeyData().popular;

  return (
    <WrapperSlider
      title="Popular"
      isError={isError}
      error={error}
      endpoint={endpoint}
      data={data?.results}
      isFetching={isFetching}
    >
      <VideosCardList data={data?.results} loading={isLoading} endpoint={endpoint} isFetching={isFetching}/>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default Popular;
