import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, className = "", ...props }) => (
  <LazyLoadImage
    alt="Movie banner"
    className={className}
    effect="blur"
    src={src}
    {...props}
  />
);

export default Img;
