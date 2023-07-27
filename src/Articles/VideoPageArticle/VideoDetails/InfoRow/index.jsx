import React from "react";
import cn from "./InfoRow.module.scss";

const InfoRow = ({
  data,
  title,
  keyName = "",
  list = false,
  classname = "",
  children,
}) => {
  return (
    <>
      {data > 0 || data?.length ? (
        <div className={`${cn.info} ${cn[classname]}`}>
          <span className={`${cn.text} ${cn.bold}`}>{title}</span>
          <div className={cn.info__content}>
            {list ? (
              data?.map((item, index) => (
                <span key={index} className={cn.text}>
                  {item[keyName] || item}
                  {data?.length - 1 !== index && ", "}
                </span>
              ))
            ) : (
              <span className={cn.text}>{children}</span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InfoRow;
