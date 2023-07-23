import {useInfiniteQuery} from "react-query";
import {useGetData} from "../useGetData.js";
import {getData} from "../../../../utils/api.js";



const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  status,
} = useInfiniteQuery('search_query', () => getData(), {
  getNextPageParam: (lastPage, pages) =>
    lastPage.nextCursor,
});
