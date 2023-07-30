import React from "react";

import CreditsList from "./CreditsList";

import Profile from "./Profile";

const PersonSection = () => {

  return (
    <div className='main'>
        <Profile/>
        <CreditsList
          endpoints={["movie", "tv"]}
          media_type={["Movies", "TV Shows"]}
        />
    </div>
  );
};

export default PersonSection;
