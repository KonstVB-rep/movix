import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Articles/hooks/commonHooks/useApi.js";
import useSwitchTabs from "../../Articles/hooks/commonHooks/useSwitchTabs.js";
import ErrorElement from "../ErrorElement/index.jsx";
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
    <ErrorElement error={error} isError={isError} title={title}>
      <SkeletonsListMedia classnameCard={classname} isLoading={status !== 'success'} tabsNames={tabsNames} />
        <VideoCardListWithSlider
          data={data?.results}
          dataList={data?.results}
          endpoint={endpoint}
          endpointCard={endpoint[0]}
          tabsNames={tabsNames}
          title={title}
          onTabChange={onTabChange}
        />
    </ErrorElement>
  );
};

export default SliderBox;
