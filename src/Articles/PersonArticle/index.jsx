import React from "react";

import CreditsList from "./CreditsList";

import Profile from "./Profile";
import NotFoundPageArticle from "../NotFoundPageArticle";
import useApi from "../hooks/commonHooks/useApi.js";
import { useParams } from "react-router-dom";
import useSwitchTabs from "../hooks/commonHooks/useSwitchTabs.js";

const PersonSection = () => {
  const { id } = useParams();
  const { endpoint } = useSwitchTabs(["movie", "tv"]);
  const { error } = useApi().useVideoCreditsPerson(id, endpoint[0]);

  return (
    <NotFoundPageArticle error={error}>
      <div className="main">
        <Profile />
        <CreditsList
          endpoints={["movie", "tv"]}
          media_type={["Movies", "TV Shows"]}
        />
      </div>
    </NotFoundPageArticle>
  );
};

export default PersonSection;
