export const getNumberSkeletons = (classname) => {
  switch (classname) {
    case "skeletons__item_grid": {
      return +getComputedStyle(
        document.querySelector(":root")
      ).getPropertyValue("--count-skeletons-grid");
    }

    case "skeletons__item_flex": {
      return +getComputedStyle(
        document.querySelector(":root")
      ).getPropertyValue("--count-skeletons-flex");
    }
    default:
      return 4;
  }
};
