import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailCountryQuery } from 'redux/countriesAPI/countriesAPI';

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
}

export const CountryDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<ICountryDetail>();

  const { data, isError } = useGetDetailCountryQuery(params.country || '');

  // Navigate to 404 if country is not found
  useEffect(() => {
    if (isError) {
      navigate('/404');
    }
  }, [isError, navigate]);

  // Formatting country data
  useEffect(() => {
    if (!data) {
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
    } = data[0];

    const getNativeNames = (): string => {
      if (!name.nativeName) {
        return '';
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

    const capitalToShow = capital ? capital.join(', ') : '';
    const domain = tld ? tld.join(', ') : '';

    const currenciesToShow: string = currencies
      ? Object.keys(currencies)
          .map(item => {
            return currencies[item].name;
          })
          .join(', ')
      : '-';

    setCountry(state => ({
      ...state,
      name: name.common,
      flag: flags.png,
      nativeName: getNativeNames(),
      population: !isNaN(population)
        ? //  change to helper:
          population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '-',
      region,
      subregion: subregion ? subregion : '-',
      capital: capitalToShow ? capitalToShow : '-',
      domain: domain ? domain : '-',
      currencies: currenciesToShow,
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
        </div>
      )}
    </>
  );
};
