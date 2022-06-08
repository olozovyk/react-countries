import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCountryByNameQuery } from 'redux/countriesAPI/countriesAPI';
import { BorderCountries } from 'components/BorderCounties/BorderCounties';
import { populationNormalize } from '../../helpers/populationNormalize';

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
    <>
      {country && (
        <div>
          <img src={country.flag} alt={country.name} />
          <h2>{country.name}</h2>
          <p>
            <span>Native Name: </span>
            <span>{country.nativeName}</span>
          </p>
          <p>
            <span>Population: </span>
            <span>{country.population}</span>
          </p>
          <p>
            <span>Region: </span>
            <span>{country.region}</span>
          </p>
          <p>
            <span>Sub Region: </span>
            <span>{country.subregion}</span>
          </p>
          <p>
            <span>Capital: </span>
            <span>{country.capital}</span>
          </p>
          <p>
            <span>Top Level Domain: </span>
            <span>{country.domain}</span>
          </p>
          <p>
            <span>Currencies: </span>
            <span>{country.currencies}</span>
          </p>
          <p>
            <span>Languages: </span>
            <span>{country.languages}</span>
          </p>
          <div>
            <span>Border Countries:</span>
            <BorderCountries borders={country.borders} />
          </div>
        </div>
      )}
    </>
  );
};
