import styled from '@emotion/styled';
import Select from 'react-select';

export const SelectWrap = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-height: calc(18 / 14);
  color: ${p => p.theme.colors.label};
`;

export const InputSelect = styled(Select)`
  font-size: 18px;
  font-weight: 500;
  font-height: calc(20 / 18);

  color: ${p => p.theme.colors.textPrimary};
`;
