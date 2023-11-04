import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const FilterWrap = styled.form`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  gap: 18px;
`;

export const MileageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const Mileage = styled.div`
  background-color: ${p => p.theme.colors.bgInputDark};
  display: flex;
  gap: 1px;

  border: none;
  border-radius: 14px;
  overflow: hidden;
`;

export const MileageWrap = styled.div`
  position: relative;
`;

export const MileageLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-height: calc(18 / 14);
  color: ${p => p.theme.colors.label};
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-height: calc(20 / 18);

  position: absolute;
  left: 24px;
  top: 15px;

  color: ${p => p.theme.colors.textPrimary};
`;

export const Input = styled(NumericFormat)`
  font-size: 18px;
  font-weight: 500;
  font-height: calc(20 / 18);
  background-color: ${p => p.theme.colors.bgInputLight};
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  border: none;
  outline: none;

  color: ${p => p.theme.colors.textPrimary};
`;
