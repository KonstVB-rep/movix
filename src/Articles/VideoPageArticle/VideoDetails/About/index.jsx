import React from "react";
import Img from "../../../../components/Img";
import { useSelector } from "react-redux";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { dataMovieCrew, dataMovieRelease } from "./data";

import { useParams } from "react-router-dom";
import ProfitabilityFilm from "../ProfitabilityFilm";
import DurationOfSeries from "../DurationOfSeries";
import InfoRow from "../InfoRow";
import useApi from "../../../hooks/commonHooks/useApi.js";

import cn from "./About.module.scss";

const About = () => {
  const { movieType, id } = useParams();
  const urlBackdrop = useSelector((state) => state.urlBaseForImages.url?.backdrop);

  const {data: movieDetails} = useApi().movie_details(movieType,id)

  const {
    writers,
    director,
    isError: isErrorCrew,
    error
  } = useApi().crew(movieType, id);

  const crewDetails = { director, writers };


  return (
    <div className={cn.about}>
      <ProfitabilityFilm movieDetails={movieDetails} />
      <DurationOfSeries movieDetails={movieDetails} />
      <div className={cn["info-group"]}>
        {dataMovieRelease.map((item) => (
          <InfoRow
            data={movieDetails[item.prop]}
            title={item.title}
            list={item.list}
            keyName={item.keyName}
            classname={item.classname}
            key={item.title}
          >
            {item.child ? item.child(movieDetails) : null}
          </InfoRow>
        ))}
      </div>
      {isErrorCrew ? <InfoRow  data='error' list= {false} classname='error'>{error?.message || 'Error receiving data'}</InfoRow> : (
        <>
          {dataMovieCrew.map((item) => (
            <InfoRow
              data={crewDetails[item.prop]}
              title={item.title}
              list={item.list}
              keyName={item.keyName}
              classname={item.classname}
              key={item.title}
            >
              {item.child ? item.child(crewDetails) : null}
            </InfoRow>
          ))}
        </>
      )}
      <InfoRow
        data={movieDetails?.production_companies}
        title="Production companies"
        classname="border-none"
      >
        {<div className = {cn.company}>
          {movieDetails?.production_companies?.map(({name, logo_path}) => (
            <div
              className = {cn.company__logo}
              key = {name}
              title = {name}
            >
              {logo_path ? (
                <Img src = {urlBackdrop + logo_path} />
              ) : (
                <div className = {cn["icon-placeholder"]}>
                  <MdOutlineImageNotSupported />
                </div>
              )}
            </div>
          ))}
        </div>}
      </InfoRow>
    </div>
  );
};

export default About;
