import React from 'react';
import Index from "../../../components/SliderBox/index.jsx";
import SliderBox from "../../../components/SliderBox/index.jsx";


const slidersListMain = [
  {title: 'Trending', keyApi: 'trending', endpoints: ["day", "week"], tabsNames: ["Day", "Week"]},
  {title: 'Popular', keyApi: 'popular', endpoints: ["movie", "tv"], tabsNames: ["Movies", "TV Shows"]},
  {title: 'Top rated', keyApi: 'topRated', endpoints: ["movie", "tv"], tabsNames: ["Movies", "TV Shows"]},
]

const MediaSliders = () => {
  return (
    <>
      {slidersListMain.map(section => <SliderBox
        key={section.keyApi}
        {...section}
      /> )}
    </>
  );
};

export default MediaSliders;
