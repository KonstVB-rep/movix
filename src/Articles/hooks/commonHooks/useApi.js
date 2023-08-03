import useGetBanner from "../hooksMain/useGetBanner.js";
import useGetMovies from "../hooksMain/useGetMovies.js";
import useGetEmployeeCrew from "../hooksMoviePage/useGetEmployeeCrew.js";
import {useGetData} from "./useGetData.js";
import useGetDataInfinity from "./useGetDataInfinity.js";

const useApi = () => ({
    useTopRated             : (endpoint) => useGetMovies("top_movies", endpoint, "", "/top_rated",{enabled: !!endpoint}),
    useTrending            : (endpoint) => useGetMovies("trending_movies", endpoint, "trending/movie/","",{enabled: !!endpoint}),
    usePopular             : (endpoint) => useGetMovies("popular_videos", endpoint, "", "/popular",{enabled: !!endpoint}),
    useBanner               : () => useGetBanner(),
    useMovieDetails        : (movieType,id) => useGetData(movieType, `/${movieType}/${id}`, id,{enabled: !!(movieType && id)}),
    useCrew                 : (movieType,id) =>useGetEmployeeCrew(movieType,id),
    usePerson               : (id) =>  useGetData('person',`/person/${id}`,id ),
    useTrailersList        : (movieType,id) => useGetData('trailers_list', `/${movieType}/${id}/videos`, id,{enabled: !!(movieType && id)}),
    useSimilar              : (movieType,id) => useGetData('similar', `/${movieType}/${id}/similar`, id,{enabled: !!(movieType && id)}),
    useRecommendations      : (movieType,id) => useGetData('recommendations', `/${movieType}/${id}/recommendations`, id, {enabled: !!(movieType && id)}),
    useVideoCreditsPerson  : (id, endpoint, config) =>  useGetData('movie_credits_person',`/person/${id}/${endpoint}_credits`,[endpoint,id],{enabled: !!(endpoint && id), ...config} ),
    useDiscover             : (url,queryParams,name_request, key) => useGetDataInfinity(url, queryParams,name_request, key),
    useSearchQuery         : (url,queryParams,name_request, key) => useGetDataInfinity(url, queryParams,name_request, key),
  });

export default useApi;
