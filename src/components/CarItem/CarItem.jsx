import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CarDescription } from '../CarDescription/CarDescription';
import {
  CarImg,
  // Details,
  DetailsItem,
  DetailsList,
  DetailsWrap,
  FavIcon,
  Icon,
  IconWrapper,
  ImgWrapper,
  Item,
  Span,
  Title,
} from './CarItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelector';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import { LearnMoreBtn } from 'components/Buttons/LearnMoreBtn/LearnMoreBtn';

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

  const dispatch = useDispatch();
  const { favoriteCars } = useSelector(selectFavorite);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const companyAddress = address.split(',');
  const city = companyAddress[1];
  const country = companyAddress[2];

  useEffect(() => {
    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      setIsFavorite(true);
    }
  }, [car, favoriteCars]);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <Item>
      <ImgWrapper onClick={toggleModal}>
        <IconWrapper onClick={handleFavorite}>
          {isFavorite ? (
            <FavIcon width={20} height={20} />
          ) : (
            <Icon width={20} height={20} />
          )}
        </IconWrapper>
        <CarImg src={img} alt={model} width="274" height="268" />
      </ImgWrapper>

      <Title>
        <p>
          {make} <Span>{model}</Span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </Title>

      {/* <div>
        <Details>
          {city} | {country} | {rentalCompany}
        </Details>
        <Details>
          {type} | {model} | {id} | {functionalities[0]}
        </Details>
      </div> */}

      <DetailsWrap>
        <DetailsList>
          <DetailsItem>{city}</DetailsItem>
          <DetailsItem>{country}</DetailsItem>
          <DetailsItem>{rentalCompany}</DetailsItem>
        </DetailsList>
        <DetailsList>
          <DetailsItem>{type}</DetailsItem>
          <DetailsItem>{model}</DetailsItem>
          <DetailsItem>{id}</DetailsItem>
          <DetailsItem>{functionalities[0]}</DetailsItem>
        </DetailsList>
      </DetailsWrap>

      <LearnMoreBtn toggleModal={toggleModal} />
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <CarDescription car={car} onClose={toggleModal} />
        </Modal>
      )}
    </Item>
  );
};