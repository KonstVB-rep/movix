import React from 'react';
import useGetKeyData from "../Articles/hooks/commonHooks/useGetKeyData.js";
import {useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import {PersonSection} from "../Articles/PersonArticle";

const PersonPage = () => {
  return (
    <div className='wrapper'>
        <PersonSection/>
    </div>
  );
};

export default PersonPage;
