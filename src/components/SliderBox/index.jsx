import React, {useEffect, useState} from "react";
import ErrorElement from "../ErrorElement/index.jsx";
import { useParams } from "react-router-dom";
import useSwitchTabs from "../../Articles/hooks/commonHooks/useSwitchTabs.js";
import useApi from "../../Articles/hooks/commonHooks/useApi.js";
import SkeletonsListMedia from "../SkeletonsListMedia/index.jsx";
import VideoCardListWithSlider from "../VideoCardListWithSlider";

const SliderBox = ({
  title,
  keyApi,
  endpoints = [],
  tabsNames = [],
  classname,
}) => {
  const { movieType, id } = useParams();

  const [params, setParams] = useState('');

  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const chooseParams = () => {
      setParams(tabsNames.length ? endpoint : [movieType, id]);
  };

  let { data, status, isError, error } = useApi()[keyApi](
    ...params
  );

  useEffect(() => {
      chooseParams();
  }, [movieType, id, endpoint]);

  return (
    <ErrorElement isError={isError} error={error} title={title}>
      <SkeletonsListMedia classnameCard={classname} tabsNames={tabsNames} isLoading={status !== 'success'} />
        <VideoCardListWithSlider
          dataList={data?.results}
          endpointCard={endpoint[0]}
          data={data?.results}
          endpoint={endpoint}
          title={title}
          tabsNames={tabsNames}
          onTabChange={onTabChange}
        />
    </ErrorElement>
  );
};

export default SliderBox;
