import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import {SwitchTabs} from "../../../components/SwitchTabs";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {VideosList} from "../../../components/VideosList";

const TopRated = () => {
  const { data, endpoint, isLoading, onTabChange, isError, error } = useGetKeyData().topRated

  return (
    <WrapperSlider
      title="TopRated"
      error={error}
      isError={isError}
      loading={isLoading}
      endpoint={endpoint}
      data={data?.results}
    >
      <VideosList data={data?.results} loading={isLoading} endpoint={endpoint}/>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default TopRated;
