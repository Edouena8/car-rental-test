export const getFilteredCars = (payload, filter) => {
  const getParsedValue = value => parseInt(value.replace(/\D+/g, ''), 10);

  const result = payload.filter(({ rentalPrice, make, mileage }) => {
    const parsedValue = getParsedValue(rentalPrice);
    return (
      make.toLowerCase() === filter.make &&
      parsedValue <= filter.price &&
      mileage > filter.mileageMin &&
      mileage < filter.mileageMax
    );
  });

  return result;
};
