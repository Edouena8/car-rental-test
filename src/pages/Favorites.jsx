import { CarsList } from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelector';

const Favorites = () => {
  const {favoriteCars} = useSelector(selectFavorite);

  return (
    <div>
      <h1>Your favorites cars</h1>
      {favoriteCars.length > 0 ? (
        <CarsList data={favoriteCars} />
      ) : (
        <p>No cars yet</p>
      )}
    </div>
  );
};

export default Favorites;
