import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCarsForFilter,
  fetchCarsFromFirstPage,
} from 'redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectCars } from 'redux/cars/carsSelectors';
import { useState } from 'react';
import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { selectFilter } from 'redux/filter/filterSelectors';
import { getFilteredCars } from 'helpers/getFilteredCars';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [visibleCars, setVisisbleCars] = useState([]);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchCarsFromFirstPage());
      setShowBtn(true);
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (filtering) {
      (async () => {
        const { payload } = await dispatch(fetchAllCarsForFilter());
        const filteredCars = await getFilteredCars(payload, filter);
        setVisisbleCars(filteredCars);
      })();
    }
  }, [dispatch, filter, filtering]);

  return (
    <>
      <Filter setShowBtn={setShowBtn} setFiltering={setFiltering} />

      {filtering ? (
        visibleCars.length > 0 ? (
          <CarsList data={visibleCars} />
        ) : (
          <p>Sorry, there’s no vehicle available</p>
        )
      ) : (
        <CarsList data={cars} />
      )}

      {!filtering &&
        (isLoading ? (
          <div>Loading cars...</div>
        ) : showBtn ? (
          <LoadMoreBtn
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setShowBtn={setShowBtn}
          />
        ) : (
          <p>The end of the list</p>
        ))}
    </>
  );
};

export default Catalog;
