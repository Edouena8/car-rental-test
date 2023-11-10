import { ClearBtn } from './ClearButton.styled';

export const ClearButton = ({ handleClearBtn, isDisabled }) => {

  return (
    <ClearBtn
      onClick={handleClearBtn}
      disabled={isDisabled}
    >
      Clear
    </ClearBtn>
  );
};
