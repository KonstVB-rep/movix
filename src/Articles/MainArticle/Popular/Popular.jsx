import React from "react";

import { WrapperSlider } from "../../../components/WrapperSlider";
import {SwitchTabs} from "../../../components/SwitchTabs";
import useGetKeyData from "../../hooks/useGetKeyData.js";
import {VideosList} from "../../../components/VideosList";

const Popular = () => {

  const { data, endpoint, isLoading, isError, onTabChange, error } = useGetKeyData().popular;

  return (
    <WrapperSlider
      title="Popular"
      isError={isError}
      error={error}
      loading={isLoading}
      endpoint={endpoint}
      data={data?.results}
    >
      <VideosList data={data?.results} loading={isLoading} endpoint={endpoint}/>
      <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
    </WrapperSlider>
  );
};

export default Popular;
