import React from "react";
import SkeletonBox from "../components/SkeletonBox";

const withSkeletonBox = (Component) => (props) => {
    const { tabsNames = [],isLoading, ...rest } = props;

    return (
      <>
        {isLoading  && (
          <SkeletonBox tabsNames={tabsNames} >
            <Component {...rest} />
          </SkeletonBox>
        )}
      </>
    );
  };

export default withSkeletonBox;
