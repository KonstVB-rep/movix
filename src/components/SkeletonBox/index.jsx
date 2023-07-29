import React from "react";

import cn from "./SkeletonBox.module.scss";

const SkeletonBox = ({ tabsNames = [], children }) => {
  return (
    <>
      <div className="wrapper">
        <div className={cn.heading}>
          <h3 className={`title-article ${cn.title} ${cn.ellipse}`}></h3>
          {tabsNames.length ? (
            <div className={`${cn.switch} ${cn.ellipse}`} />
          ) : null}
        </div>
        <ul className={cn.slides}>{children}</ul>
      </div>
    </>
  );
};

export default SkeletonBox;
