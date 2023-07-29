import React from "react";
import { useParams } from "react-router-dom";

import CreditsList from "./CreditsList";

import Profile from "./Profile";

const PersonSection = () => {

  return (
    <div className='wrapper main'>
        <Profile/>
        <CreditsList
          endpoints={["movie", "tv"]}
          media_type={["Movies", "TV Shows"]}
        />
    </div>
  );
};

export default PersonSection;
