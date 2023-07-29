import React from "react";
import SkeletonBox from "../components/SkeletonBox/index.jsx";

const withSkeletonBox = (Component) => {
  return (props) => {
    const { tabsNames = [], isLoading, isFetching, ...rest } = props;
    return (
      <>
        {(isLoading || isFetching) && (
          <SkeletonBox tabsNames={tabsNames}>
            <Component {...rest} />
          </SkeletonBox>
        )}
      </>
    );
  };
};

export default withSkeletonBox;
