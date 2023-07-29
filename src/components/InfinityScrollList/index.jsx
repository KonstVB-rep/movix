import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import VideoCard from "../VideoCard";

const InfinityScrollList = ({
  isLoading,
  hasNextPage,
  fetchNextPage,
  data,
  dataPages,
  isFetching,
}) => {

  return (
    <>
      {(isLoading || isFetching) ? (
        <Loader />
      ) : (
        <>
          <InfiniteScroll
            className="grid"
            hasMore={hasNextPage || false}
            next={fetchNextPage}
            dataLength={data ? data.results.length : 0}
            scrollThreshold={1}
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
      )}
    </>
  );
};

export default InfinityScrollList;
