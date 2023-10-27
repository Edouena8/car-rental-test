import { makeUniqueCarsAndSort } from '../../helpers/makeUniqueCarsAndSort';
import { InputSelect, SelectWrap } from './Select.styled';
import makes from '../../makes.json';
import { makeOptions } from '../../helpers/makeOptions';
import { makePriceArr } from '../../helpers/makePriceArr';

export const Select = ({
  textLabel,
  name,
  carBrand,
  width,
  value,
  handleChange,
}) => {
  const sortMakes = makeUniqueCarsAndSort(makes);
  const brandOptions = makeOptions(sortMakes);
  const priceOptions = makeOptions(makePriceArr());

  return (
    <SelectWrap width={width}>
      <label htmlFor={name}>{textLabel}</label>
      <InputSelect
        id={name}
        options={carBrand ? brandOptions : priceOptions}
        value={value}
        onChange={handleChange}
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            backgroundColor: 'rgba(247, 247, 251, 1)',
            borderRadius: '14px',
            border: 'none',
            height: '48px',
            output: 'none',
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            transition: 'transform 0.5s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          }),
        }}
      />
    </SelectWrap>
  );
};
