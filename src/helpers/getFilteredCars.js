export const getFilteredCars = (payload, filter) => {
  const { make, price, mileageMin, mileageMax } = filter;

  const filteredByMake = make
    ? payload.filter(item => item.make.toLowerCase() === make)
    : [...payload];

  const filteredByPrice = price
    ? filteredByMake.filter(
        item => Number(item.rentalPrice.replace('$', '')) <= Number(price)
      )
    : [...filteredByMake];

  const filteredByMileageMin = mileageMin
    ? filteredByPrice.filter(item => Number(item.mileage) >= mileageMin)
    : [...filteredByPrice];

  const filteredByMileageMax = mileageMax
    ? filteredByMileageMin.filter(item => Number(item.mileage) <= mileageMax)
    : [...filteredByMileageMin];

  return filteredByMileageMax;
};
