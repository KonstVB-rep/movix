import React, {useEffect, useMemo, useRef, useState} from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

import cn from './Slider.module.scss'
import {Slide} from "./Slide";
import {SliderSkeleton} from "./SliderSkeleton";


const Slider = ({data, loading, endpoint, title = ''}) => {
  const sliderContainer = useRef(null);

  const [disabledArrow, setDisabledArrow] = useState('left')

  const navigation = (dir) => {
    const container = sliderContainer.current;
    if (container) {

      const scrollAmount =
        dir === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);


      if (scrollAmount >= container.scrollWidth) {
        setDisabledArrow('right')
      }
      else if (scrollAmount <= 0) {
        setDisabledArrow('left')
      }else setDisabledArrow('')

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if(sliderContainer.current){
      sliderContainer.current.scrollLeft = 0
    }
    setDisabledArrow('left')
  }, [endpoint])


  // const renderSlides = useMemo(
  //   () => (
  //     <div className={cn.slides} ref={sliderContainer}>
  //       {data?.map((item, index) => (
  //         <Slide item={item} endpoint={endpoint} key={index} />
  //       ))}
  //     </div>
  //   ),
  //   []
  // );

  return (
    <div className = {cn.slider}>
      <div className = {`${cn.wrapper} wrapper`}>
        {title && <div className = {cn.slider__title}>{title}</div>}
        <button onClick = {() => navigation("left")} className = {`${cn.arrow} ${cn.arrow_left}`} disabled={disabledArrow==='left'}>
          <BsFillArrowLeftCircleFill
          />
        </button>
        <button className = {`${cn.arrow} ${cn.arrow_right}`}
                onClick = {() => navigation("right")}
                disabled={disabledArrow==='right'}
        >
          <BsFillArrowRightCircleFill
          />
        </button>
        {!loading ? (
          <div className = {cn.slides} ref = {sliderContainer}>
            {data?.map((item, index) => <Slide item = {item} endpoint = {endpoint} key = {index} />)}
          </div>
        ) : <SliderSkeleton />}
      </div>
    </div>
  );
};

export default Slider;
