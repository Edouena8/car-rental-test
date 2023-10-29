import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CarDescription } from '../CarDescription/CarDescription';
import {
  Details,
  FavIcon,
  Icon,
  IconWrapper,
  ImgWrapper,
  Item,
} from './CarItem.styled';

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
  const [isFavorite, setIsFavorite] = useState(false);

  const companyAddress = address.split(',');
  const city = companyAddress[1];
  const country = companyAddress[2];

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Item>
      <ImgWrapper>
        <IconWrapper onClick={handleFavorite}>
          {isFavorite ? (
            <FavIcon width={18} height={18} />
          ) : (
            <Icon width={18} height={18} />
          )}
        </IconWrapper>
        <img src={img} alt={model} width="274" height="268" />
      </ImgWrapper>

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
