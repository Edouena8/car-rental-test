import styled from '@emotion/styled';
import { ReactComponent as ActiveIcon } from '../../assets/icons/heart-active.svg';
import { ReactComponent as NormalIcon } from '../../assets/icons/heart-normal.svg';

export const Item = styled.li`
  width: 274px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
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
  transition: transform ${p => p.theme.transition.time}
      ${p => p.theme.transition.cubic},
    box-shadow ${p => p.theme.transition.time} ${p => p.theme.transition.cubic};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.shadows.image};
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
  transition: transform ${p => p.theme.transition.time}
    ${p => p.theme.transition.cubic};
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

export const FavIcon = styled(ActiveIcon)`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.colors.accent};
`;

export const Icon = styled(NormalIcon)`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  height: 274px;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  font-weight: 1.5;
  color: ${p => p.theme.colors.textPrimary};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.accent};
`;

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
    border-right: 1px solid ${p => p.theme.colors.borderDetails};
  }

  color: ${p => p.theme.colors.textSecondary};
`;
