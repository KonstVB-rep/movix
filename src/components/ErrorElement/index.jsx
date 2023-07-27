import React from "react";
import cn from "./ErrorElement.module.scss";

const ErrorElement = ({ title, error, isError, children }) => {
  return (
    <>
      {isError ? (
        <div className={`wrapper ${cn["error-wrapper"]}`}>
          <h3 className={"title-article"}>{title}</h3>
          <div className={cn.error}>
            <span>
              {error?.response.data.status_message ||
                "Sorry, something went wrong, go back to the main page"}
            </span>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ErrorElement;
