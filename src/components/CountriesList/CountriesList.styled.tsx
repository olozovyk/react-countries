import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CountriesSectionStyled = styled.section`
  padding: 15px 0 15px;
`;

export const CountriesListStyled = styled.ul`
  display: grid;
  gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 320px);
`;

export const CountriesItemStyled = styled.li`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.elementsColor};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  overflow: hidden;
`;

export const CountriesImageLinkStyled = styled(Link)`
  display: block;
  width: 320px;
  height: 195px;
  overflow: hidden;
`;

export const CountriesImageStyled = styled.img`
  object-fit: cover;
`;

export const CountriesContentStyled = styled.div`
  padding: 20px;
`;

export const CountryNameStyled = styled.h2`
  margin-bottom: 20px;

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
