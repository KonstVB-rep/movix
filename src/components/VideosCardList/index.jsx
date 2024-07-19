import React from "react";

import VideoCard from "../VideoCard";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const GUTTER_SIZE = 15;

const VideosCardList = ({ dataList, endpointCard, classnameCard }) => (
  <>
    <AutoSizer disableHeight>
      {({ height = 560, width }) => (
        <List
          className="List grid"
          height={height}
          itemCount={dataList?.length}
          itemSize={290}
          layout="horizontal"
          innerElementType={"ul"}
          width={width}
        >
          {({ index, style }) => (
            <VideoCard
              classnameCard={classnameCard}
              data={dataList[index]}
              endpoint={endpointCard}
              style={{
                ...style,
                left: style.left + GUTTER_SIZE,
                width: style.width - GUTTER_SIZE,
                height: style.height - GUTTER_SIZE * 2,
              }}
            />
          )}
        </List>
      )}
    </AutoSizer>
  </>
);

export default VideosCardList;
