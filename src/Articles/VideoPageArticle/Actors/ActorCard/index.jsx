import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import avatar from "../../../../assets/avatar.webp";
import Img from "../../../../components/Img";

import cn from "../Actors.module.scss";

const ActorCard = ({ data, style }) => {
  const url = useSelector((state) => state.urlBaseForImages.url?.profile);

  const { id, profile_path, name, character } = data;

  const ref = useRef(null);

  return (
    <li className={cn.item} style={style}>
      <Link className="link" to={`/person/${id}`} />
      <p
        className={cn.avatar}
        ref={ref}
        style={{
          background: `url(${
            profile_path ? url + profile_path : avatar
          }) center center / cover no-repeat`,
        }}
      >
        <Img
          src={profile_path ? url + profile_path : avatar}
          onLoad={() => (ref.current.className += " " + cn.avatar_loaded)}
        />
      </p>
      <p className={cn.name}>{name}</p>
      <p className={cn.character}>{character}</p>
    </li>
  );
};

export default ActorCard;
