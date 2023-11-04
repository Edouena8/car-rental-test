import { CarRentalBtn } from 'components/Buttons/CarRentalBtn/CarRentalBtn';
import mainCarImage from '../../assets/images/cars2.png';
import { CatalogLink } from 'components/Buttons/CatalogLink/CatalogLink';
import { Text, Wrap } from './HomeContent.styled';

export const HomeContent = () => {
  return (
    <>
      <Wrap>
        <Text>
          Your adventure begins here at our car rental site. Whether you're a
          traveler seeking the perfect ride for your journey or a local in need
          of reliable wheels, our platform offers everything you need for a
          smooth and enjoyable car rental experience.
        </Text>

        <CatalogLink />
      </Wrap>

      <Wrap>
        <Text>
          Have a question or need assistance? Our dedicated service team is just
          a phone call away. We're here to help you with any inquiries, booking
          guidance, or special requests. Your satisfaction is our top priority,
          and we're committed to providing exceptional customer support.
        </Text>

        <CarRentalBtn text="ContactUs" />
      </Wrap>

      <img src={mainCarImage} alt="cars" width="1300" />
    </>
  );
};
