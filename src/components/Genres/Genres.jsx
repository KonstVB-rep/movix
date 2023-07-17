import "./Genres.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchDataFromApi, useGetData} from "../hooks/useGetData.js";
import {getData} from "../../../utils/api.js";
import {fetchAllGenres, fetchUrl, getGenres} from '../../../store/slices/mainSlice.js'
import cn from './Genres.module.scss'


const Genres = ({genresMovie}) => {
  const { genres } = useSelector((state) => state.main);

  const [type, setType] = useState('')
  const dispatch = useDispatch()


  // const {data: genresTv} = useGetData('type_tv', `/genre/tv/list`, type)
  // const {data: genresMovies} = useGetData('type_movie', `/genre/movie/list`, type)
  // console.log('queryTv', genresTv?.genres)
  // console.log('queryMovie', genresMovies?.genres)

  // const fetchGenres = async () => {
  //   let promises = [];
  //   let endPoints = ["tv", "movie"];
  //   let allGenres = {};
  //
  //   try{
  //     endPoints.forEach((point) => {
  //       promises.push(getData(`/genre/${point}/list`));
  //     });
  //
  //     const data = await Promise.all(promises);
  //     data.map(({ genres }) => {
  //       return genres.map((item) => (allGenres[item.id] = item));
  //     });
  //     return allGenres
  //   }catch (e) {
  //     console.log(e.response.data.status_message
  //     )
  //   }
  // };
  //
  useEffect(() => {
    dispatch(fetchAllGenres())
  }, [])

  return (
    <div className={cn.genres}>
      {genresMovie?.map((id) =>
          <div key={id} className={cn.genre}>
            {genres[id]?.name}
          </div>
      )}
    </div>
  );
};

export default Genres
