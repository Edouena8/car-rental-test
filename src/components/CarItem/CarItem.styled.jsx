import styled from '@emotion/styled';
import { ReactComponent as ActiveIcon } from '../../assets/icons/heart-active.svg';
import { ReactComponent as NormalIcon } from '../../assets/icons/heart-normal.svg';

export const Item = styled.li`
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
`;

export const FavIcon = styled(ActiveIcon)``;

export const Icon = styled(NormalIcon)``;

export const Details = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
`;
