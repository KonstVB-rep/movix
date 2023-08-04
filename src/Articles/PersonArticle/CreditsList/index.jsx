import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/commonHooks/useApi.js";
import useSwitchTabs from "../../hooks/commonHooks/useSwitchTabs.js";
import ButtonSort from "../../../components/Buttons/ButtonSort";
import CLearSort from "../../../components/Buttons/ClearSort";
import SwitchTabs from "../../../components/SwitchTabs";
import VideosCardList from "../../../components/VideosCardList";
import ErrorElement from "../../../components/ErrorElement";
import SkeletonsListMedia from "../../../components/SkeletonsListMedia";
import {sortByOptionDate, sortByOptionNumber, sortByOptionText} from "../../../../utils/helpers.js";

import cn from "../PersonSection.module.scss";


const CreditsList = ({ endpoints, media_type }) => {
  const { id } = useParams();
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const [videos, setVideos] = useState([]);
  const [direction, setDirection] = useState({
    title: "",
    date: "",
    rating: "",
  });

  const { data, isLoading, isError, error, isFetching } =
    useApi().useVideoCreditsPerson(id, endpoint[0], {
      onSuccess: (data) => {
        if (data?.cast) {
          setVideos(data.cast);
        }
      },
    });

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

  useEffect(() => () => setDirection(direction), [endpoint]);

  useEffect(() => {
    const handleSort = () => {
      const name = endpoint[0] === "movie" ? "title" : "name";
      const date = endpoint[0] === "movie" ? "release_date" : "first_air_date";
      const rating = "vote_average";

      const sortData = data?.cast.toSorted(
        (a, b) =>
          sortByOptionText(a, b, name, direction.title) ||
          sortByOptionDate(a, b, date, direction.date) ||
          sortByOptionNumber(a, b, rating, direction.rating)
      );

      setVideos(sortData);
    };

    handleSort();
  }, [direction, endpoint,data?.cast]);

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
          <VideosCardList
            classname="skeletons__item_grid"
            classnameCard="card_grid"
            dataList={videos}
            endpointCard={endpoint[0]}
            isFetching={isFetching}
            loading={isLoading}
          />
        </div>
      </div>
    </ErrorElement>
  );
};

export default CreditsList;
