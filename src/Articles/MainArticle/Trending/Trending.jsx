import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import { SwitchTabs } from "../../../components/SwitchTabs/index.jsx";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {VideosCardList} from "../../../components/VideosCardList";

const Trending = () => {
  const { data, endpoint, isLoading, onTabChange, isError, error,isFetching } = useGetKeyData().trending;

  return (
    <WrapperSlider
      title="Trending"
      loading={isLoading}
      isError={isError}
      error={error}
      endpoint={endpoint}
      data={data?.results}
      isFetching={isFetching}
    >
      <VideosCardList data={data?.results} loading={isLoading} endpoint={endpoint} isFetching={isFetching}/>
      <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default Trending;
