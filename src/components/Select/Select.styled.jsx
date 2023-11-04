import styled from '@emotion/styled';
import Select from 'react-select';

export const SelectWrap = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputSelect = styled(Select)``;
