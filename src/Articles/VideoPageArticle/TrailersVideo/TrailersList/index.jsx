import React, {memo} from 'react';

import withSlider from "../../../../hoc/withSlider.jsx";
import TrailerCard from "../TrailerCard";


const TrailersList = memo(({dataList}) => (
        <>
          {dataList.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer}/>
          ))}
        </>
  ));

export default withSlider(TrailersList);

