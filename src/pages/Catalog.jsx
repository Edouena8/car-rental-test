import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCarsForFilter,
  fetchFirstPage,
} from 'redux/cars/carsOperations';
import { useEffect } from 'react';
import { selectCars } from 'redux/cars/carsSelectors';
import { useState } from 'react';
import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { getFilteredCars } from 'helpers/getFilteredCars';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { BackToTop } from 'components/Buttons/BackToTop/BackToTop';

const Catalog = () => {
  const dispatch = useDispatch();

  const { cars, isLoading } = useSelector(selectCars);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [visibleCars, setVisisbleCars] = useState([]);

  const [searchParams] = useSearchParams();
  const make = searchParams.get('make');
  const rentalPrice = searchParams.get('rentalPrice');
  const mileageMin = searchParams.get('mileageMin');
  const mileageMax = searchParams.get('mileageMax');

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchFirstPage());
      setShowBtn(true);
    }
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
      <Filter setShowBtn={setShowBtn} setFiltering={setFiltering} setCurrentPage={setCurrentPage} />

      {filtering ? (
        visibleCars.length > 0 ? (
          <CarsList data={visibleCars} />
        ) : (
          <p>Sorry, there’s no vehicle available</p>
        )
      ) : (
        <CarsList data={cars} />
      )}

      {isLoading && <Loader />}
      {showBtn && !isLoading && (
        <LoadMoreBtn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setShowBtn={setShowBtn}
        />
      )}

      <BackToTop />
    </>
  );
};

export default Catalog;
