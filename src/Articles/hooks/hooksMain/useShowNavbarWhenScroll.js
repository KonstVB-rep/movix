import React, {useEffect} from 'react';

const useShowNavbarWhenScroll = (conditionScroll,conditionNavbar, cbScroll, cbNavbar ) => {


    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > conditionScroll && !conditionNavbar) {
          cbScroll("hide");
        } else {
          cbScroll("show");
        }
      } else {
        cbScroll("top");
      }
      cbNavbar(window.scrollY);
    };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [conditionScroll]);

};

export default useShowNavbarWhenScroll;
