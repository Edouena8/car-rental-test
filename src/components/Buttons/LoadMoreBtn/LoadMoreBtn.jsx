import { useDispatch } from 'react-redux';
import { Button } from './LoadMoreBtn.styled';
import { fetchAllCars } from 'redux/cars/carsOperations';

export const LoadMoreBtn = ({ currentPage, setCurrentPage, setShowBtn }) => {
  const dispatch = useDispatch();

  const onLoadMore = async () => {
    const { payload } = await dispatch(fetchAllCars(currentPage + 1));
    setCurrentPage(prevPage => prevPage + 1);

    if (payload.length < 12) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  return <Button onClick={onLoadMore}>Load more</Button>;
};
