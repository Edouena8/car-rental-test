import { useDispatch } from 'react-redux';
import { fetchAllCars } from 'redux/cars/carsOperations';
import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ currentPage, setCurrentPage, setShowBtn }) => {
  const dispatch = useDispatch();

  const onLoadMore = async () => {
    const { payload } = await dispatch(fetchAllCars(currentPage + 1));
    setCurrentPage(prevPage => (prevPage += 1));
    if (payload < 12) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  return <Button onClick={onLoadMore}>Load more</Button>;
};
