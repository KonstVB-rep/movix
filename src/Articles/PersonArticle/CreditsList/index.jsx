import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/commonHooks/useApi.js";
import VideosCardList from "../../../components/VideosCardList";
import cn from "../PersonSection.module.scss";
import SwitchTabs from "../../../components/SwitchTabs";
import useSwitchTabs from "../../hooks/commonHooks/useSwitchTabs.js";
import ErrorElement from "../../../components/ErrorElement";
import SkeletonsListMedia from "../../../components/SkeletonsListMedia";
import ButtonSort from "../../../components/Buttons/ButtonSort";
import CLearSort from "../../../components/Buttons/ClearSort/index.jsx";

const sortByOptionText = (a, b, option, optionValue) => {
  if (optionValue === "up") {
    return a[option].toLowerCase().localeCompare(b[option].toLowerCase());
  } else if (optionValue === "down") {
    return b[option].toLowerCase().localeCompare(a[option].toLowerCase());
  } else return 0;
};

const sortByOptionDate = (a, b, option, optionValue) => {
  if (optionValue === "up") {
    return new Date(a[option]) - new Date(b[option]);
  } else if (optionValue === "down") {
    return new Date(b[option]) - new Date(a[option]);
  } else return 0;
};

const sortByOptionNumber = (a, b, option, optionValue) => {
  if (optionValue === "up") {
    return a[option] - b[option];
  } else if (optionValue === "down") {
    return b[option] - a[option];
  } else return 0;
};


const CreditsList = ({ endpoints, media_type }) => {
  const { id } = useParams();
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const [videos, setVideos] = useState([]);
  const [direction, setDirection] = useState({
    title: "",
    date: "",
    rating: "",
  });

  const { isLoading, isError, error, isFetching } =
    useApi().video_credits_person(id, endpoint[0], {
      onSuccess: (data) => {
       if(data?.cast){
         setVideos(data.cast);
       }
      },
    });
  // first_air_date
  const handleSort = () => {
    // const [title, release_date, vote_average] = option;
    const name = endpoint[0] === 'movie' ? 'title' : 'name';
    const date = endpoint[0] === 'movie' ? 'release_date' : 'first_air_date';
    const rating = 'vote_average'
    const sortData = videos.toSorted(
      (a, b) =>
        sortByOptionText(a, b, name, direction.title) ||
        sortByOptionDate(a, b, date, direction.date) ||
        sortByOptionNumber(a, b, rating, direction.rating)
    );

    setVideos(sortData);
  };

  const toggleDirection = (e) => {
    const dirSort =
      direction[e.target.name] === "down" || direction[e.target.name] === ""
        ? "up"
        : "down";
    setDirection((d) => ({ ...d, [e.target.name]: dirSort }));
  };

  const clearSort = () => {
    setDirection({
      title: "",
      date: "",
      rating: "",
    });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


  useEffect(() => {
    handleSort();
  }, [direction]);

  return (
    <ErrorElement isError={isError} error={error} title="Profile">
      <SkeletonsListMedia tabsNames={endpoints} isLoading={isLoading} />
      <div className="wrapper">
        <div className={cn.heading}>
          <h2 className="title-article">
            {endpoint[0] === "movie" ? "Movies" : "TV Show"}
          </h2>
          <SwitchTabs data={media_type} onTabChange={onTabChange} />
        </div>
        <div className={cn["container-sort"]}>
          <ButtonSort
            toggleDirection={toggleDirection}
            name="title"
            direction={direction}
          />
          <ButtonSort
            toggleDirection={toggleDirection}
            name="date"
            direction={direction}
          />
          <ButtonSort
            toggleDirection={toggleDirection}
            name="rating"
            direction={direction}
          />
          <CLearSort clearSort={clearSort} />
        </div>
        <div className={`grid ${cn["grid_person-movies"]}`}>
          <VideosCardList
            dataList={videos}
            endpointCard={endpoint[0]}
            isFetching={isFetching}
            loading={isLoading}
            classname="skeletons__item_grid"
            classnameCard="card_grid"
          />
        </div>
      </div>
    </ErrorElement>
  );
};

export default CreditsList;
