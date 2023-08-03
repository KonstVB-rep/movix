import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";



const Img = ({ src, className='' }) => <LazyLoadImage alt="Banner" className={className} effect="blur" src={src} />;

export default Img;
