import styled from '@emotion/styled';
import { ReactComponent as ActiveIcon } from '../../assets/icons/heart-active.svg';
import { ReactComponent as NormalIcon } from '../../assets/icons/heart-normal.svg';

export const Item = styled.li`
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    );
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

export const FavIcon = styled(ActiveIcon)`
  width: 100%;
  height: 100%;
  fill: rgba(52, 112, 255, 1);
`;

export const Icon = styled(NormalIcon)`
  width: 100%;
  height: 100%;
`;

export const CarImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  font-weight: 1.5;
  color: rgba(18, 20, 23, 1);
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;

// export const Details = styled.p`
//   font-size: 12px;
//   line-height: 1.5;
//   color: rgba(18, 20, 23, 0.5);
//   max-width: 90%;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   overflow: hidden;
//   text-align: left;
// `;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
`;

export const DetailsItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  padding: 0 6px;
  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  color: rgba(18, 20, 23, 0.5);
`;
