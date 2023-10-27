export const makePriceArr = () => {
  const priceArr = [];

  for (let i = 30; i <= 500; i += 10) {
    priceArr.push(i);
  }

  return priceArr;
};
