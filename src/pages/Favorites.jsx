import { CarsList } from 'components/CarsList/CarsList';
import { EmptyFavList } from 'components/EmptyFavList/EmptyFavList';
import { Title } from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelector';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <>
      <Title text="Your favorite cars" />
      {favoriteCars.length > 0 ? (
        <CarsList data={favoriteCars} />
      ) : (
        <EmptyFavList />
      )}
    </>
  );
};

export default Favorites;
