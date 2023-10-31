import styled from '@emotion/styled';

export const CarImg = styled.img`
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;

  margin-bottom: 8px;

  color: rgba(18, 20, 23, 1);
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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

export const Descr = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  margin-top: 14px;

  color: rgba(18, 20, 23, 1);
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  margin-top: 24px;
  margin-bottom: 8px;

  color: rgba(18, 20, 23, 1);
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;

  background-color: rgba(249, 249, 249, 1);
`;

export const ConditionsText = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(54, 53, 53, 1);
`;
