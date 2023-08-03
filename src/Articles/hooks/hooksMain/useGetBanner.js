import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useGetData} from "../commonHooks/useGetData.js";



const useGetBanner = () => {
  const [banner, setBanner] = useState("");
  const urlBackdrop = useSelector((state) => state.urlBaseForImages.url?.backdrop);

  const { data, isLoading, isError, error } = useGetData('movies_upcoming', "/movie/upcoming");

  const onSettled = (data) => {
    if (data && urlBackdrop) {
      const img =
        `${urlBackdrop}${data.results?.[Math.floor(Math.random() * 20)].backdrop_path}`;
      setBanner(img);
    }
  }

  useEffect(() => {
      onSettled(data)
  }, [data])


  return { banner, data, isLoading, isError, error };
};

export default useGetBanner;
