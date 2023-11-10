import { CatalogLink } from 'components/Buttons/CatalogLink/CatalogLink';
import img from '../../assets/images/nocontent.png';
import { EmptyWrap, Image, Text, Title } from './EmptyFavList.styled';

export const EmptyFavList = () => {
  return (
    <div className="container">
      <EmptyWrap>
        <Title>Your car list is empty</Title>
        <Text>You don't have any favorite cars right now.</Text>
        <Image src={img} alt="nocontent" width="460px" />

        <CatalogLink />
      </EmptyWrap>
    </div>
  );
};
