import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CarDescription } from '../CarDescription/CarDescription';
import { Details, Item } from './CarItem.styled';

export const CarItem = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  const [isShowModal, setIsShowModal] = useState(false);

  const companyAddress = address.split(',');
  const city = companyAddress[1];
  const country = companyAddress[2];

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  return (
    <Item>
      <img src={img} alt={model} width="274px" height="268" />
      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <Details>
          {city} | {country} | {rentalCompany}
        </Details>
        <Details>
          {type} | {model} | {id} | {functionalities[0]}
        </Details>
      </div>

      <button onClick={toggleModal}>Learn more</button>
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <CarDescription car={car} onClose={toggleModal} />
        </Modal>
      )}
    </Item>
  );
};
