import ButtonSort from "../../../components/Buttons/ButtonSort";
import CLearSort from "../../../components/Buttons/ClearSort";
import SwitchTabs from "../../../components/SwitchTabs";
import VideoCard from "../../../components/VideoCard/index.jsx";
import ErrorElement from "../../../components/ErrorElement";
import SkeletonsListMedia from "../../../components/SkeletonsListMedia";
import useData from "./hook.jsx";

import cn from "../PersonSection.module.scss";

const CreditsList = ({ endpoints, media_type }) => {
  const {
    videos,
    toggleDirection,
    clearSort,
    isLoading,
    isError,
    error,
    direction,
    onTabChange,
    endpoint,
  } = useData(endpoints);

  return (
    <ErrorElement error={error} isError={isError} title="Profile">
      <SkeletonsListMedia isLoading={isLoading} tabsNames={endpoints} />
      <div className="wrapper">
        <div className={cn["container-sort"]}>
          <ButtonSort
            direction={direction}
            name="title"
            toggleDirection={toggleDirection}
          />
          <ButtonSort
            direction={direction}
            name="date"
            toggleDirection={toggleDirection}
          />
          <ButtonSort
            direction={direction}
            name="rating"
            toggleDirection={toggleDirection}
          />
          <CLearSort clearSort={clearSort} />
        </div>
        <div className={cn.heading}>
          <h2 className="title-article">
            {endpoint[0] === "movie" ? "Movies" : "TV Show"}
          </h2>
          <SwitchTabs data={media_type} onTabChange={onTabChange} />
        </div>
        <div className={`grid ${cn["grid_person-movies"]}`}>
          {videos?.map((item, index) => (
            <VideoCard
              key={index}
              classnameCard="card_grid"
              data={item}
              endpoint={endpoint}
            />
          ))}
        </div>
      </div>
    </ErrorElement>
  );
};

export default CreditsList;
