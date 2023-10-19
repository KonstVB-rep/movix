import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, className = "" }) => {
  return (
    <LazyLoadImage
      alt="Movie banner"
      className={className}
      effect="blur"
      delayTime={100}
      src={src}
    />
  );
};

export default Img;
