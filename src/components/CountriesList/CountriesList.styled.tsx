import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CountriesSectionStyled = styled.section`
  padding: 15px 0 15px;
`;

export const CountriesListStyled = styled.ul`
  display: grid;
  gap: 30px;
  justify-content: center;
  grid-template-columns: minmax(320px, 460px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CountriesItemStyled = styled.li`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.elementsColor};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  overflow: hidden;
`;

export const CountriesImageLinkStyled = styled(Link)`
  display: block;
  width: 100%;
  height: 50vw;
  overflow: hidden;

  @media screen and (min-width: 550px) {
    height: 270px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 26vw;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 16vw;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 180px;
  }
`;

export const CountriesImageStyled = styled.img`
  object-fit: cover;
`;

export const CountriesContentStyled = styled.div`
  padding: 20px;
`;

export const CountryNameStyled = styled.h2`
  margin-bottom: 16px;

  & a {
    font-size: 18px;
    color: inherit;
    text-decoration: none;
  }
`;

export const CountryInfoRowStyle = styled.p`
  margin-bottom: 4px;
`;

export const CountryCategoryNamesStyled = styled.span`
  font-weight: 700;
`;
