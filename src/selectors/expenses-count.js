export default (bag) => {
  if (Array.isArray(bag)) {
    return bag.length;
  } else return 0;
};
