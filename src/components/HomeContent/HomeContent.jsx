import { CarRentalBtn } from 'components/Buttons/CarRentalBtn/CarRentalBtn';
import mainCarImage from '../../assets/images/cars2.png';
import { CatalogLink } from 'components/Buttons/CatalogLink/CatalogLink';
import { Text, Wrap, Image, ImageContainer } from './HomeContent.styled';

export const HomeContent = () => {
  return (
    <div>
      <Wrap>
        <Text>
          Access your personalized favorites page with a dedicated navigation
          interface. Filter your favorite cars based on brand, price, and
          mileage range. Add and remove cars from your favorites list
          effortlessly. View contact details, including a phone number, to
          easily get in touch with the car owner.
        </Text>

        <CatalogLink />

        <Text>
          Have a question or need assistance? Our dedicated service team is just
          a phone call away. We're here to help you with any inquiries, booking
          guidance, or special requests. Your satisfaction is our top priority,
          and we're committed to providing exceptional customer support.
        </Text>

        <CarRentalBtn text="Contact Us" />

        <ImageContainer>
          <Image src={mainCarImage} alt="cars" />
        </ImageContainer>
      </Wrap>
    </div>
  );
};
