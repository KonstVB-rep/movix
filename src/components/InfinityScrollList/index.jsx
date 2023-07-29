import React, {memo} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import VideoCard from "../VideoCard";

const InfinityScrollList = memo(({
  isLoading,
  hasNextPage,
  fetchNextPage,
  data,
  dataPages,
  isFetching,
}) => {

  return (
    <>
          {(isLoading || isFetching) && <Loader />}
          <InfiniteScroll
            className="grid"
            hasMore={hasNextPage || false}
            next={fetchNextPage}
            dataLength={data ? data.results.length : 0}
            scrollThreshold={0.85}
            loader={<Loader />}
          >
            {dataPages?.map((page) =>
              page?.results.map((item) => {
                return (
                  <VideoCard key={item.id} data={item} classname="card_grid" />
                );
              })
            )}
          </InfiniteScroll>
        </>
  );
});

export default InfinityScrollList;
