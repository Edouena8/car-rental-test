import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const FilterWrap = styled.form`
  margin-bottom: 50px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;

export const MileageContainer = styled.div`
  text-align: left;
`;

export const Mileage = styled.div`
  background-color: rgba(138, 138, 137, 0.2);
  display: flex;
  gap: 1px;

  border: none;
  border-radius: 14px;
  overflow: hidden;
`;

export const MileageWrap = styled.div`
  position: relative;
`;

export const Label = styled.p`
  position: absolute;
  left: 24px;
  top: 15px;
`;

export const Input = styled(NumericFormat)`
  background-color: rgba(247, 247, 251, 1);
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  border: none;
  outline: none;
`;


