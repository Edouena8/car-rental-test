import defaultImage from '../../assets/images/empty-image.png';
import { CarRentalBtn } from 'components/Buttons/CarRentalBtn/CarRentalBtn';
import {
  CarImg,
  DetailsItem,
  DetailsList,
  DetailsWrap,
  Span,
  Title,
  Descr,
  Subtitle,
  ConditionsList,
  ConditionsItem,
  ConditionsText,
} from './CarDescription.styled';

export const CarDescription = ({ car, onClose }) => {
  const {
    id,
    img = defaultImage,
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
      <CarImg src={img} alt={model} width="461" height="248" />
      <Title>
        {make} <Span>{model}</Span>, {year}
      </Title>
      <DetailsWrap>
        <DetailsList>
          <DetailsItem>{city}</DetailsItem>
          <DetailsItem>{country}</DetailsItem>
          <DetailsItem>Id: {id}</DetailsItem>
          <DetailsItem>Year: {year}</DetailsItem>
          <DetailsItem>Type: {type}</DetailsItem>
        </DetailsList>
        <DetailsList>
          <DetailsItem>Fuel Consumption: {fuelConsumption}</DetailsItem>
          <DetailsItem>Engine Size: {engineSize}</DetailsItem>
        </DetailsList>
      </DetailsWrap>
      <Descr>{description}</Descr>

      <Subtitle>Accessories and functionalities:</Subtitle>
      <DetailsWrap>
        <DetailsList>
          <DetailsItem>{accessories[0]}</DetailsItem>
          <DetailsItem>{accessories[1]}</DetailsItem>
          <DetailsItem> {functionalities[0]}</DetailsItem>
        </DetailsList>
        <DetailsList>
          <DetailsItem>{accessories[2]}</DetailsItem>
          <DetailsItem>{functionalities[1]} </DetailsItem>
          <DetailsItem>{functionalities[2]}</DetailsItem>
        </DetailsList>
      </DetailsWrap>

      <Subtitle>Rental Conditions: </Subtitle>
      <ConditionsList>
        <ConditionsItem>
          <ConditionsText>
            {minAge[0]}: <Span>{minAge[1]}</Span>
          </ConditionsText>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsText>{conditions[1]}</ConditionsText>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsText>{conditions[2]}</ConditionsText>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsText>
            Mileage: <Span>{mileageFormat}</Span>
          </ConditionsText>
        </ConditionsItem>
        <ConditionsItem>
          <ConditionsText>
            Price: <Span>{rentalPrice}</Span>
          </ConditionsText>
        </ConditionsItem>
      </ConditionsList>

      <CarRentalBtn text="RentalCar" />
    </div>
  );
};
