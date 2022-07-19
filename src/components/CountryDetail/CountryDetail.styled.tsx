import styled from '@emotion/styled';

export const CountryDetailStyled = styled.div`
  padding: 16px 0;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 440px;
    flex-shrink: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 440px;
  }
`;

export const ImageStyled = styled.img`
  height: auto;
`;

export const DetailWrapperStyled = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 0 50px;
  }
`;

export const BasicInfoStyled = styled.div`
  margin-bottom: 30px;
`;

export const TitleStyled = styled.h2`
  margin-bottom: 20px;
`;

export const InfoRowStyled = styled.p`
  margin-bottom: 10px;
`;

export const InfoTypeStyled = styled.span`
  font-weight: 600;
`;

export const AddInfoStyled = styled.div`
  margin-bottom: 30px;
`;

export const BorderTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;
