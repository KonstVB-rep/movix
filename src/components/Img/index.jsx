import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Img = ({ src, className='' }) => {
  return <LazyLoadImage className={className} alt="Banner" effect="blur" src={src} onLoad={() => 'load'}/>;
};

export default Img;
