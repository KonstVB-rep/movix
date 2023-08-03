import React from 'react';
import SliderBox from "../../../components/SliderBox/index.jsx";


const slidersListMain = [
  {title: 'Trending', keyApi: 'useTrending', endpoints: ["day", "week"], tabsNames: ["Day", "Week"]},
  {title: 'Popular', keyApi: 'usePopular', endpoints: ["movie", "tv"], tabsNames: ["Movies", "TV Shows"]},
  {title: 'Top rated', keyApi: 'useTopRated', endpoints: ["movie", "tv"], tabsNames: ["Movies", "TV Shows"]},
]

const MediaSliders = () => (
    <>
      {slidersListMain.map(section => <SliderBox
        key={section.keyApi}
        {...section}
      /> )}
    </>
  );

export default MediaSliders;
