import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import avatar from "../../../../assets/avatar.webp";
import Img from "../../../../components/Img";
import cn from "../Actors.module.scss";

const ActorCard = ({data}) => {

  const url = useSelector((state) => state.urlBaseForImages.url?.profile);

  const {id, profile_path, name, character} = data;

  return (
    <li className={cn.item}>
      <Link className='link' to={`/person/${id}`}/>
      <p className={cn.avatar}>
        <Img src={profile_path ? url + profile_path : avatar} />
      </p>
      <p className={cn.name}>{name}</p>
      <p className={cn.character}>
        {character}
      </p>
    </li>
  );
};

export default ActorCard;
