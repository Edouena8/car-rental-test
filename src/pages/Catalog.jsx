import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars, fetchAllCarsForFilter } from 'redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectCars } from 'redux/cars/carsSelectors';
import { useState } from 'react';
import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { getFilteredCars } from 'helpers/getFilteredCars';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const dispatch = useDispatch();

  const { cars, isLoading, currentPage } = useSelector(selectCars);
  const [showBtn, setShowBtn] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [visibleCars, setVisisbleCars] = useState([]);

  const [searchParams] = useSearchParams();
  const make = searchParams.get('make');
  const rentalPrice = searchParams.get('rentalPrice');
  const mileageMin = searchParams.get('mileageMin');
  const mileageMax = searchParams.get('mileageMax');

  useEffect(() => {
    dispatch(fetchAllCars(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (make || rentalPrice || mileageMin || mileageMax) {
      setFiltering(true);
    }
  }, [make, rentalPrice, mileageMin, mileageMax]);

  useEffect(() => {
    if (filtering || make || rentalPrice || mileageMin || mileageMax) {
      dispatch(fetchAllCarsForFilter());
    }

    // setShowBtn(false);
  }, [make, rentalPrice, mileageMin, mileageMax, dispatch, filtering]);

  useEffect(() => {
    if (filtering) {
      const filteredCars = getFilteredCars(cars, {
        make,
        rentalPrice,
        mileageMin,
        mileageMax,
      });
      setVisisbleCars(filteredCars);
      setShowBtn(false);
    }
  }, [cars, filtering, make, mileageMax, mileageMin, rentalPrice]);

  return (
    <>
      <Filter
        setShowBtn={setShowBtn}
        setFiltering={setFiltering}
      />

      {filtering ? (
        visibleCars.length > 0 ? (
          <CarsList data={visibleCars} />
        ) : (
          <p>Sorry, there’s no vehicle available</p>
        )
      ) : (
        <CarsList data={cars} />
      )}

      {isLoading && <div>Loading cars...</div>}
      {showBtn && !isLoading && (
        <LoadMoreBtn currentPage={currentPage} setShowBtn={setShowBtn} />
      )}
    </>
  );
};

export default Catalog;
