import React from 'react';
import useGetKeyData from "../Articles/hooks/useGetKeyData.js";
import {useParams} from "react-router-dom";

const PersonPage = () => {
  const{id} = useParams()
  const {data} = useGetKeyData().person(id)
  return (
    <div>
      Person
    </div>
  );
};

export default PersonPage;
