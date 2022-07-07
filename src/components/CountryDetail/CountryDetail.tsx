import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCountryByNameQuery } from 'redux/countriesAPI/countriesAPI';
import { BorderCountries } from 'components/BorderCountries/BorderCountries';
import { populationNormalize } from 'helpers/populationNormalize';
import { Container } from 'components/Container/Container';
import {
  AddInfoStyled,
  BasicInfoStyled,
  BorderTitle,
  CountryDetailStyled,
  ImageStyled,
  ImageWrapper,
  InfoRowStyled,
  InfoTypeStyled,
  TitleStyled,
} from './CountryDetail.styled';

interface ICountryDetail {
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  domain: string;
  currencies: string;
  languages: string;
  borders: string[];
}

export const CountryDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<ICountryDetail>();

  const { data, isError } = useGetCountryByNameQuery(params.country || '');

  // Navigate to 404 if country is not found
  useEffect(() => {
    if (isError) {
      navigate('/404');
    }
  }, [isError, navigate]);

  // Formatting country data
  useEffect(() => {
    if (!data || !data[0].name.common) {
      return;
    }

    const {
      name,
      flags,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    } = data[0];

    const getNativeNames = (): string => {
      if (!name.nativeName) {
        return '-';
      }
      const keys: string[] = Object.keys(name.nativeName);
      return keys
        .map(lang => {
          if (name.nativeName![lang].common) {
            return name.nativeName![lang].common;
          } else {
            return undefined;
          }
        })
        .filter(name => name !== undefined)
        .join(', ');
    };

    const populationToShow = population ? populationNormalize(population) : '-';
    const regionToShow = region ? region : '-';
    const subregionToShow = subregion ? subregion : '-';
    const capitalToShow = capital ? capital.join(', ') : '-';
    const domainToShow = tld ? tld.join(', ') : '-';

    const currenciesToShow: string = currencies
      ? Object.keys(currencies)
          .map(item => {
            return currencies[item].name;
          })
          .join(', ')
      : '-';

    const languagesToShow: string = languages
      ? Object.keys(languages)
          .map(lang => {
            return languages[lang];
          })
          .join(', ')
      : '-';

    setCountry(state => ({
      ...state,
      flag: flags.png,
      name: name.common,
      nativeName: getNativeNames(),
      population: populationToShow,
      region: regionToShow,
      subregion: subregionToShow,
      capital: capitalToShow,
      domain: domainToShow,
      currencies: currenciesToShow,
      languages: languagesToShow,
      borders,
    }));
  }, [data]);

  return (
    <CountryDetailStyled>
      <Container>
        {country && (
          <div>
            <ImageWrapper>
              <ImageStyled src={country.flag} alt={country.name} />
            </ImageWrapper>

            <BasicInfoStyled>
              <TitleStyled>{country.name}</TitleStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Native Name: </InfoTypeStyled>
                <span>{country.nativeName}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Population: </InfoTypeStyled>
                <span>{country.population}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Region: </InfoTypeStyled>
                <span>{country.region}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Sub Region: </InfoTypeStyled>
                <span>{country.subregion}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Capital: </InfoTypeStyled>
                <span>{country.capital}</span>
              </InfoRowStyled>
            </BasicInfoStyled>

            <AddInfoStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Top Level Domain: </InfoTypeStyled>
                <span>{country.domain}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Currencies: </InfoTypeStyled>
                <span>{country.currencies}</span>
              </InfoRowStyled>
              <InfoRowStyled>
                <InfoTypeStyled>Languages: </InfoTypeStyled>
                <span>{country.languages}</span>
              </InfoRowStyled>
            </AddInfoStyled>

            <div>
              <BorderTitle>Border Countries: </BorderTitle>
              <BorderCountries borders={country.borders} />
            </div>
          </div>
        )}
      </Container>
    </CountryDetailStyled>
  );
};
