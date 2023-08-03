import React, { memo } from "react";
import { useSelector } from "react-redux";
import NotImage from "../../../../../assets/not_image.svg";
import Img from "../../../../../components/Img/index.jsx";
import InfoRow from "../../InfoRow/index.jsx";
import cn from "../About.module.scss";

const ProductionCompanies = memo(({ movieDetails }) => {
  const urlBackdrop = useSelector(
    (state) => state.urlBaseForImages.url?.backdrop
  );

  return (
    <InfoRow
      classname="border-none"
      data={movieDetails?.production_companies}
      title="Production companies"
    >
      {
        <div className={cn.company}>
          {movieDetails?.production_companies?.map(({ name, logo_path }) => (
            <div key={name} className={cn.company__logo} title={name}>
              {logo_path ? (
                <Img src={urlBackdrop + logo_path} />
              ) : (
                <div className={cn["icon-placeholder"]}>
                  <img alt="Not image" src={NotImage} />
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
