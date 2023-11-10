export const getFilteredCars = (payload, filter) => {
  const { make, rentalPrice, mileageMin, mileageMax } = filter;

  if (
    !make &&
    !rentalPrice &&
    !mileageMin &&
    !mileageMax &&
    payload.length === 0
  ) {
    return payload;
  }

  const filteredByMake = make
    ? payload.filter(item => item.make.toLowerCase() === make)
    : [...payload];

  const filteredByPrice = rentalPrice
    ? filteredByMake.filter(
        item => Number(item.rentalPrice.replace('$', '')) <= Number(rentalPrice)
      )
    : [...filteredByMake];

  const filteredByMileageMin = mileageMin
    ? filteredByPrice.filter(item => Number(item.mileage) >= mileageMin)
    : [...filteredByPrice];

  const filteredByMileageMax = mileageMax
    ? filteredByMileageMin.filter(item => Number(item.mileage) <= mileageMax)
    : [...filteredByMileageMin];
  console.log(filteredByPrice);
  return filteredByMileageMax;
};
