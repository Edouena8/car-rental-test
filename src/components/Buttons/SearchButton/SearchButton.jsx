import { SearchBtn } from "./SearchButton.styled";

export const SearchButton = ({ handleSearchBtn, isDisabled }) => {
    
  return (
    <SearchBtn onClick={handleSearchBtn} disabled={isDisabled}>
      Search
    </SearchBtn>
  );
};