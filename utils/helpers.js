export const getUniqData = (data, keys, option) => {
  let result = [];
  const [value, param] = keys;
  for (let i = 0; i < data?.length - 1; i++) {
    const item = data[i][value];
    if (!result.includes(item) && option.includes(data[i][param])) {
      result.push(item);
    }
  }
  return result;
};

export const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};

export const debounce = (fn, delay) => {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(args);
    }, delay);
  };
};
