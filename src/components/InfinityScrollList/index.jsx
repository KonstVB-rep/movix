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
}) => (
    <>
          {(isLoading || isFetching) && <Loader />}
          <InfiniteScroll
            className="grid"
            dataLength={data ? data?.results.length : 0}
            hasMore={hasNextPage || false}
            loader={<Loader />}
            next={fetchNextPage}
            scrollThreshold={0.85}
          >
            {dataPages?.map((page) =>
              page?.results.map((item) => (
                  <VideoCard key={item.id} classnameCard="card_grid" data={item} />
                ))
            )}
          </InfiniteScroll>
        </>
  ));

export default InfinityScrollList;
