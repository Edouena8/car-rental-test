export const formatingToNumber = str => {
  const result = str ? str.replace(/[^0-9]/g, '') : '';
  return result;
};
