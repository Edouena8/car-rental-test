import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCars,
  fetchCars,
  fetchCarsFromFirstPage,
} from 'redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectCars } from 'redux/cars/carsSelectors';
import { useState } from 'react';
import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);

  const [currentPage, setCurrentPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  console.log(showBtn);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchCarsFromFirstPage());
      setShowBtn(true);
      console.log(showBtn);
    }
  }, [currentPage, dispatch, showBtn]);

  return (
    <>
      <Filter />
      <CarsList data={cars} />
      {showBtn ? (
        <LoadMoreBtn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setShowBtn={setShowBtn}
        />
      ) : (
        <p>The end of the list</p>
      )}
    </>
  );
};

export default Catalog;
