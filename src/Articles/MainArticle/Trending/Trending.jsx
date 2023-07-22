import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import { SwitchTabs } from "../../../components/SwitchTabs/index.jsx";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {VideosList} from "../../../components/VideosList";

const Trending = () => {
  const { data, endpoint, isLoading, onTabChange, isError, error } =
    useGetKeyData().trending;

  return (
    <WrapperSlider
      title="Trending"
      loading={isLoading}
      isError={isError}
      error={error}
      endpoint={endpoint}
      data={data?.results}
    >
      <VideosList data={data?.results} loading={isLoading} endpoint={endpoint}/>
      <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default Trending;
