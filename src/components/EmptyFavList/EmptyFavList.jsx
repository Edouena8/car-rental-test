import { CatalogLink } from 'components/CatalogLink/CatalogLink';
import img from '../../assets/images/nocontent.png';
import { Section, Text, Title } from './EmptyFavList.styled';

export const EmptyFavList = () => {
  return (
    <Section>
      <Title>Your car list is empty</Title>
      <Text>You don't have any favorite cars right now.</Text>
      <img src={img} alt="nocontent" width="450" height="450" />

      <CatalogLink />
    </Section>
  );
};
