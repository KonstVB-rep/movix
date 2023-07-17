import React, {useEffect} from 'react';
import {useGetData} from "../../../components/hooks/useGetData.js";
import {getData} from "../../../../utils/api.js";
import {getGenres} from "../../../../store/slices/mainSlice.js";
import {useDispatch} from "react-redux";

const useGetGenres = () => {

  const dispatch = useDispatch()

  const fetchGenres = async () => {
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};

      endPoints.forEach((point) => {
        promises.push(getData(`/genre/${point}/list`));
      });

      const data = await Promise.all(promises);
      data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
      });
      return allGenres
    };

    // useEffect(() => {
    //   fetchGenres().then(data => {
    //     dispatch(getGenres(data))
    //   })
    // }, [])

  return (
    <div>

    </div>
  );
};

export default useGetGenres;
