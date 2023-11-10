import { useDispatch, useSelector } from 'react-redux';
import { Button } from './LoadMoreBtn.styled';
import { incrementCurrentPage } from 'redux/cars/carsSlice';
import { selectCars } from 'redux/cars/carsSelectors';

export const LoadMoreBtn = ({ setShowBtn }) => {
  const dispatch = useDispatch();
  const { cars, currentPage } = useSelector(selectCars);

  const onLoadMore = () => {
    dispatch(incrementCurrentPage());
    console.log(cars.length / currentPage);
    if (cars.length / currentPage < 12) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  return <Button onClick={onLoadMore}>Load more</Button>;
};
