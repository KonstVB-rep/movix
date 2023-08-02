import React, { memo } from "react";
import InfoRow from "../../InfoRow/index.jsx";
import cn from "../About.module.scss";
import Img from "../../../../../components/Img/index.jsx";
import NotImage from "../../../../../assets/not_image.svg";
import { useSelector } from "react-redux";

const ProductionCompanies = memo(({ movieDetails }) => {
  const urlBackdrop = useSelector(
    (state) => state.urlBaseForImages.url?.backdrop
  );

  return (
    <InfoRow
      data={movieDetails?.production_companies}
      title="Production companies"
      classname="border-none"
    >
      {
        <div className={cn.company}>
          {movieDetails?.production_companies?.map(({ name, logo_path }) => (
            <div className={cn.company__logo} key={name} title={name}>
              {logo_path ? (
                <Img src={urlBackdrop + logo_path} />
              ) : (
                <div className={cn["icon-placeholder"]}>
                  <img src={NotImage} alt="Not image" />
                </div>
              )}
            </div>
          ))}
        </div>
      }
    </InfoRow>
  );
});

export default ProductionCompanies;
