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
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { fetchCarsFromFirstPage } from 'redux/cars/carsOperations';

export const Filter = ({ setShowBtn, setFiltering }) => {
  const dispatch = useDispatch();
  const [brandValue, setBrandValue] = useState({
    value: '',
    label: 'Enter the text',
  });

  const [priceValue, setPriceValue] = useState({
    value: '',
    label: 'To $',
  });

  const [price, setPrice] = useState('');
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      brandValue.label !== 'Enter the text' ||
      priceValue.label !== 'To $' ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [brandValue, mileageMax, mileageMin, priceValue]);

  const handleChangeBrand = selectedPrice => {
    setBrandValue({
      value: selectedPrice.value,
      label: selectedPrice.value,
    });
  };

  const handleChangePrice = selectedPrice => {
    const currentPrice = `To ${selectedPrice.value}$`;
    setPriceValue({
      value: currentPrice,
      label: currentPrice,
    });
    setPrice(selectedPrice.value);
  };

  const handleChangeMileage = evt => {
    const value = evt.target.value;

    switch (evt.target.name) {
      case 'mileageMin':
        setMileageMin(value);
        break;
      case 'mileageMax':
        setMileageMax(value);
        break;
      default:
        break;
    }
  };

  const handleSearchBtn = evt => {
    evt.preventDefault();
    const newFilterObj = {
      make: brandValue.value.toLowerCase().trim(),
      price: price || '500',
      mileageMin: mileageMin.split(',').join('') || '0',
      mileageMax: mileageMax.split(',').join('') || '99999',
    };

    dispatch(setFilter(newFilterObj));
    setFiltering(true);
  };

  const handleClearBtn = evt => {
    evt.preventDefault();
    dispatch(fetchCarsFromFirstPage());

    setBrandValue({
      value: '',
      label: 'Enter the text',
    });

    setPriceValue({
      value: '',
      label: 'To $',
    });

    setMileageMin('');
    setMileageMax('');

    setFiltering(false);
    setShowBtn(true);
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
              value={mileageMin}
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
              value={mileageMax}
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
