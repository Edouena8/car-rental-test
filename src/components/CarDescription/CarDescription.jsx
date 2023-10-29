import { CarRentalBtn } from "components/Buttons/CarRentalBtn/CarRentalBtn";

export const CarDescription = ({ car, onClose }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = car;

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  const conditions = rentalConditions.split('\n');
  const minAge = conditions[0].split(': ');
  const mileageFormat = mileage.toLocaleString('en-US');

  return (
    <div>
      <img src={img} alt={model} width="461" height="248" />
      <h2>
        {make} <span>{model}</span>, {year}
      </h2>
      <div>
        <p>
          {city} | {country} | Id: {id} | Year: {year} | Type: {type}
        </p>
        <p>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </p>
      </div>
      <p>{description}</p>

      <p>Accessories and functionalities:</p>
      <p>
        {accessories[0]} | {accessories[1]} | {functionalities[0]}
      </p>
      <p>
        {accessories[2]} | {functionalities[1]} | {functionalities[2]}
      </p>

      <h3>Rental Conditions: </h3>
      <ul>
        <li>
          <p>
            {minAge[0]}: <span>{minAge[1]}</span>
          </p>
        </li>
        <li>
          <p>{conditions[1]}</p>
        </li>
        <li>
          <p>{conditions[2]}</p>
        </li>
        <li>
          <p>
            Mileage: <span>{mileageFormat}</span>
          </p>
        </li>
        <li>
          <p>
            Price: <span>{rentalPrice}</span>
          </p>
        </li>
      </ul>

      <CarRentalBtn/>
    </div>
  );
};
