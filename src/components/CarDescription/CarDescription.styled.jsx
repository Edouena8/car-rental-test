import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;

  height: 248px;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;

  margin-bottom: 8px;

  color: ${p => p.theme.colors.textPrimary};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.accent};
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
    border-right: 1px solid ${p => p.theme.colors.borderDetails};
  }

  color: ${p => p.theme.colors.textSecondary};
`;

export const Descr = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  margin-top: 14px;

  color: ${p => p.theme.colors.textPrimary};
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  margin-top: 24px;
  margin-bottom: 8px;

  color: ${p => p.theme.colors.textPrimary};
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

  background-color: ${p => p.theme.colors.bgSecondary});
`;

export const ConditionsText = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: ${p => p.theme.colors.textListDesc};
`;
