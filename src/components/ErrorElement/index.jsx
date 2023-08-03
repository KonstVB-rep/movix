import React, {memo} from "react";
import cn from "./ErrorElement.module.scss";

const ErrorElement = memo(({ title, error, isError, children, classname }) => (
    <>
      {isError ? (
        <div className={`wrapper ${cn["error-wrapper"]} ${classname === 'main' ? 'main' : cn[`${classname}`]}`}>
          {title ? <h3 className = {"title-article"}>{title}</h3> : null}
          <div className={cn.error}>
            <p className={cn.error__text}>
              { error?.response?.data?.status_message ||
                error.message || "Sorry, something went wrong, go back to the main page"}
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  ));

export default ErrorElement;
