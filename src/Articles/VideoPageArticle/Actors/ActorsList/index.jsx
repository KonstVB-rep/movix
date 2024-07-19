import React, { memo } from "react";

import withSlider from "../../../../hoc/withSlider.jsx";
import ActorCard from "../ActorCard";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const GUTTER_SIZE = 15;

const ActorsList = memo(({ dataList }) => (
  <>
    <AutoSizer disableHeight>
      {({ height = 300, width }) => (
        <List
          className="List List_actors"
          height={height}
          itemCount={dataList.length}
          itemSize={190}
          layout="horizontal"
          innerElementType={"ul"}
          width={width}
        >
          {({ index, style }) => (
            <ActorCard
              data={dataList[index]}
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
));

export default withSlider(ActorsList);
