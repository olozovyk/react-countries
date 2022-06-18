import { Container } from 'components/Container/Container';
import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { populationNormalize } from '../../helpers/populationNormalize';
import {
  CountriesListStyled,
  CountriesSectionStyled,
  CountriesImageStyled,
  CountriesImageLinkStyled,
  CountriesItemStyled,
  CountriesContentStyled,
  CountryNameStyled,
  CountryCategoryNamesStyled,
  CountryInfoRowStyle,
} from './CountriesList.styled';

interface IProps {
  data: ICountry[];
  refLiElement: RefObject<HTMLLIElement>;
}

export const CountriesList: React.FC<IProps> = ({
  data = [],
  refLiElement,
}) => {
  return (
    <CountriesSectionStyled>
      <Container>
        <CountriesListStyled>
          {data.map(country => {
            const { name, region, capital } = country;
            return (
              <CountriesItemStyled key={name.common} ref={refLiElement}>
                <CountriesImageLinkStyled
                  to={`/countries/${name.common.toLowerCase()}`}
                >
                  <CountriesImageStyled
                    src={country.flags.png}
                    alt={`Flag of ${name.common}`}
                    loading="lazy"
                  />
                </CountriesImageLinkStyled>
                <CountriesContentStyled>
                  <CountryNameStyled>
                    <Link to={`/countries/${name.common.toLowerCase()}`}>
                      {name.common}
                    </Link>
                  </CountryNameStyled>

                  <CountryInfoRowStyle>
                    <CountryCategoryNamesStyled>
                      Population:{' '}
                    </CountryCategoryNamesStyled>
                    {country.population !== undefined
                      ? populationNormalize(country.population)
                      : 'No data'}
                  </CountryInfoRowStyle>
                  <CountryInfoRowStyle>
                    <CountryCategoryNamesStyled>
                      Region:{' '}
                    </CountryCategoryNamesStyled>
                    {region !== undefined ? region : 'No data'}
                  </CountryInfoRowStyle>
                  <CountryInfoRowStyle>
                    <CountryCategoryNamesStyled>
                      Capital:{' '}
                    </CountryCategoryNamesStyled>
                    {capital !== undefined ? capital.join(', ') : 'No data'}
                  </CountryInfoRowStyle>
                </CountriesContentStyled>
              </CountriesItemStyled>
            );
          })}
        </CountriesListStyled>
      </Container>
    </CountriesSectionStyled>
  );
};
