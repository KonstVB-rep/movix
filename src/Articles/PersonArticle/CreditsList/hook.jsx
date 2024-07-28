import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/commonHooks/useApi.js";
import useSwitchTabs from "../../hooks/commonHooks/useSwitchTabs.js";
import {
  sortByOptionDate,
  sortByOptionNumber,
  sortByOptionText,
} from "../../../../utils/helpers.js";

const useData = (endpoints) => {
  const { id } = useParams();
  const { endpoint, onTabChange } = useSwitchTabs(endpoints);

  const [videos, setVideos] = useState([]);
  const [direction, setDirection] = useState({
    title: "",
    date: "",
    rating: "",
  });

  const { data, isLoading, isError, error } = useApi().useVideoCreditsPerson(
    id,
    endpoint[0],
    {
      onSuccess: (data) => {
        if (data?.cast) {
          setVideos(data.cast);
        }
      },
    }
  );

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
  }, [direction, endpoint, data?.cast]);

  return {
    videos,
    toggleDirection,
    clearSort,
    isLoading,
    isError,
    error,
    direction,
    onTabChange,
    endpoint,
  };
};

export default useData;
