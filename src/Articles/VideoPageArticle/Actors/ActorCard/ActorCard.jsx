import React from 'react';
import Img from "../../../../components/Img/Img.jsx";
import {useSelector} from "react-redux";
import avatar from "../../../../assets/avatar.png";
import cn from "../Actors.module.scss";
import {Link} from "react-router-dom";

const ActorCard = ({data}) => {

  const url = useSelector((state) => state.urlBaseForImages.url?.profile);

  const {id, profile_path, name, character} = data;

  return (
    <li className={cn.item}>
      <Link to={`/person/${id}`} className='link'/>
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
