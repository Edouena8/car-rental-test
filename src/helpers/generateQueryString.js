export const generateQueryString = ({
  make,
  rentalPrice,
  mileageMin,
  mileageMax,
}) => {
  const data = Object.assign(
    {},
    make === null || make === '' ? null : { make },
    rentalPrice === null || rentalPrice === '' ? null : { rentalPrice },
    mileageMin === null || mileageMin === '' ? null : { mileageMin },
    mileageMax === null || mileageMax === '' ? null : { mileageMax }
  );

  const params = new URLSearchParams(data);

  return params.toString();
};
