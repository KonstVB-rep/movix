import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProp {
  src: string;
  className?: string;
}

const Image = ({ src, className }: ImageProp) => {
  return <LazyLoadImage className={className} alt="" effect="blur" src={src} />;
};

export default Image;
