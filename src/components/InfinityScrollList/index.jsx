import React from "react";
import SkeletonVideosList from "../SkeletonVideosList";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import VideoCard from "../VideoCard";

const InfinityScrollList = ({
  isLoading,
  hasNextPage,
  fetchNextPage,
  data,
  dataPages,
}) => {

  return (
    <>
      {isLoading ? (
       <div className="grid">
         <SkeletonVideosList classname='skeletons__item_grid'/>
       </div>
      ) : (
        <>
          {" "}
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
      )}
    </>
  );
};

export default InfinityScrollList;
