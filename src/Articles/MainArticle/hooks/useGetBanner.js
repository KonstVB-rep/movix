import {useEffect, useState} from "react";
import {useGetData} from "../../../components/hooks/useGetData.js";
import {useSelector} from "react-redux";



const useGetBanner = () => {
  const [banner, setBanner] = useState("");
  const url = useSelector(state => state.main.url);

  const { data, isLoading, isError, error } = useGetData('movies_upcoming', "/movie/upcoming");

  const onSettled = (data) => {
    if (data && url) {
      const img =
        `${url.backdrop}${data.results?.[Math.floor(Math.random() * 20)].backdrop_path}`;
      setBanner(img);
    }
  }

  useEffect(() => {
      onSettled(data)
  }, [data])

  // const { data, isLoading, isError, error } = useQuery(
  //   ["movies_upcoming"],
  //   async () => {
  //     return getData("/movie/upcoming");
  //   },
  //   {
  //     staleTime: 10000,
  //     enabled: !!url,
  //     // cacheTime: 10000,
  //     onSettled(data: DataMoviesRangeDate | undefined) {
  //       if (data && url) {
  //         const img =
  //           url.backdrop +
  //           data.results?.[Math.floor(Math.random() * 20)].backdrop_path;
  //         setBanner(img);
  //       }
  //     },
  //   }
  // );

  return { banner, data, isLoading, isError, error };
};

export default useGetBanner;
