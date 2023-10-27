import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars, fetchCars, fetchCarsFromFirstPage } from 'redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectCars } from 'redux/cars/carsSelectors';
import { useState } from 'react';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);

  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage)

  useEffect(() => {
    if (currentPage === 1) {
    dispatch(fetchCarsFromFirstPage());   
    }
   
  }, [currentPage, dispatch]);


  const onLoadMore = async () => {
    await dispatch(fetchAllCars(currentPage + 1));
    setCurrentPage(prevPage => prevPage += 1);
    console.log(currentPage)
  };

  return (
    <>
      <Filter />
      <CarsList data={cars} />
      <button onClick={onLoadMore}>Load more</button>
    </>
  );
};

export default Catalog;
