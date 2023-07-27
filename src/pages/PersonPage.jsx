import React from 'react';
import useApi from "../Articles/hooks/commonHooks/useApi.js";
import {useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import PersonSection from "../Articles/PersonArticle";

const PersonPage = () => {
  return (
    <div className='main wrapper'>
        <PersonSection/>
    </div>
  );
};

export default PersonPage;
