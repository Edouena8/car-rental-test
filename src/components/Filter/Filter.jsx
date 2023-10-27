import { useEffect, useState } from 'react';
import { Select } from '../Select/Select';
import {
  FilterWrap,
  Input,
  Label,
  Mileage,
  MileageContainer,
  MileageWrap,
} from './Filter.styled';
import { SearchButton } from '../Buttons/SearchButton/SearchButton';
import { ClearButton } from '../Buttons/ClearButton/ClearButton';

export const Filter = () => {
  const [brandValue, setBrandValue] = useState({
    value: '',
    label: 'Enter the text',
  });

  const [priceValue, setPriceValue] = useState({
    value: '',
    label: 'To $',
  });

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
    console.log(evt);
  };

  const handleClearBtn = () => {
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
        <label htmlFor="mileage">Car mileage / km</label>
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
