export const makeUniqueCarsAndSort = array => {
  const uniqueCars = array.filter(
    (item, index, arr) => arr.indexOf(item) === index,
  );

  return uniqueCars.sort();
};
