export const destroyer = (...ray) => {
  return [...ray[0]].filter((val) => ray.indexOf(val) < 0);
};
