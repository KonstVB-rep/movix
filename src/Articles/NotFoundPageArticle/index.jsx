import React from "react";

import cn from "./NotFoundPageArticle.module.scss";

const NotFoundPageArticle = ({ error, children }) => (
    <>
      {error?.response.status === 404 ? (
        <div className={cn.main}>
          <div className={`wrapper ${cn["wrapper-page"]}`}>
            <h1>
              Page not found go back to the main page.
              <br /> To do this, click on the logo
            </h1>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );

export default NotFoundPageArticle;
