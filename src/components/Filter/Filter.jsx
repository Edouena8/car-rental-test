import { useEffect, useState } from 'react';
import { Select } from '../Select/Select';
import {
  FilterWrap,
  Input,
  Label,
  Mileage,
  MileageContainer,
  MileageLabel,
  MileageWrap,
} from './Filter.styled';
import { SearchButton } from '../Buttons/SearchButton/SearchButton';
import { ClearButton } from '../Buttons/ClearButton/ClearButton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { generateQueryString } from 'helpers/generateQueryString';
import { formatingToNumber } from 'helpers/formatingNumWithComma';

export const Filter = ({ setShowBtn, setFiltering, setCurrentPage }) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const make = searchParams.get('make');
  const rentalPrice = searchParams.get('rentalPrice');
  const mileageMin = searchParams.get('mileageMin');
  const mileageMax = searchParams.get('mileageMax');

  const [brandValue, setBrandValue] = useState({
    value: make,
    label: 'Enter the text',
  });

  const [priceValue, setPriceValue] = useState({
    value: rentalPrice,
    label: 'To $',
  });

  const currentPrice = formatingToNumber(priceValue.value);
  const [currentMileageMin, setCurrentMileageMin] = useState(mileageMin);
  const [currentMileageMax, setCurrentMileageMax] = useState(mileageMax);
  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(() => {
    if (
      brandValue.label !== 'Enter the text' ||
      priceValue.label !== 'To $' ||
      (currentMileageMin !== '' && currentMileageMin !== null) ||
      (currentMileageMax !== '' && currentMileageMax !== null)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [brandValue, currentMileageMax, currentMileageMin, priceValue]);

  const handleChangeBrand = selectedBrand => {
    setBrandValue({
      value: selectedBrand.value,
      label: selectedBrand.value,
    });
  };

  const handleChangePrice = selectedPrice => {
    const currentPrice = `To ${selectedPrice.value}$`;
    setPriceValue({
      value: currentPrice,
      label: currentPrice,
    });
  };

  const handleChangeMileage = evt => {
    const value = evt.target.value;

    switch (evt.target.name) {
      case 'mileageMin':
        setCurrentMileageMin(value);
        break;
      case 'mileageMax':
        setCurrentMileageMax(value);
        break;
      default:
        break;
    }
  };

  const handleSearchBtn = evt => {
    evt.preventDefault();

    if (
      make === brandValue.value &&
      rentalPrice === currentPrice &&
      mileageMin === currentMileageMin &&
      mileageMax === currentMileageMax
    ) {
      return;
    }

    const queryString = generateQueryString({
      make: brandValue?.value?.toLowerCase() || '',
      rentalPrice: currentPrice,
      mileageMin: currentMileageMin && currentMileageMin.split(',').join(''),
      mileageMax: currentMileageMax && currentMileageMax.split(',').join(''),
    });
    setFiltering(true);
    navigate(queryString ? `?${queryString}` : '');
    setShowBtn(false);
  };

  const handleClearBtn = evt => {
    evt.preventDefault();
    setCurrentPage(1);

    setBrandValue({
      value: '',
      label: 'Enter the text',
    });

    setPriceValue({
      value: '',
      label: 'To $',
    });

    setCurrentMileageMin('');
    setCurrentMileageMax('');

    setFiltering(false);
    setShowBtn(true);

    const queryString = generateQueryString({
      make: null,
      rentalPrice: null,
      mileageMin: null,
      mileageMax: null,
    });

    navigate(`?${queryString}`);
  };

  return (
    <FilterWrap>
      <Select
        textLabel="Car brand"
        name="make"
        carBrand
        width="224px"
        value={brandValue}
        handleChange={handleChangeBrand}
      />
      <Select
        textLabel="Price/ 1 hour"
        name="price"
        width="125px"
        value={priceValue}
        handleChange={handleChangePrice}
      />
      <MileageContainer>
        <MileageLabel htmlFor="mileage">Car mileage / km</MileageLabel>
        <Mileage>
          <MileageWrap>
            <Label>From</Label>
            <Input
              name="mileageMin"
              id="fromMileage"
              format="##,###"
              maxLength={6}
              decimalScale={3}
              thousandSeparator={true}
              padding="67px"
              value={currentMileageMin}
              onChange={handleChangeMileage}
            />
          </MileageWrap>

          <MileageWrap>
            <Label>To</Label>
            <Input
              name="mileageMax"
              id="toMileage"
              padding="45px"
              format="##,###"
              maxLength={6}
              decimalScale={3}
              thousandSeparator={true}
              value={currentMileageMax}
              onChange={handleChangeMileage}
            />
          </MileageWrap>
        </Mileage>
      </MileageContainer>

      <SearchButton isDisabled={isDisabled} handleSearchBtn={handleSearchBtn} />
      <ClearButton isDisabled={isDisabled} handleClearBtn={handleClearBtn} />
    </FilterWrap>
  );
};
