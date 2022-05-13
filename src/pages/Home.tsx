import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery } from '../redux/countriesAPI/countriesAPI';
import { ICountry } from '../types/ICountry';

export const Home = () => {
  const { data = [] } = useGetAllCountriesQuery();
  const [countries, setCountries] = useState<ICountry[]>([]);

  // set initial quantity of countries for render:
  const COUNTRIES_TO_SHOW = 24;
  useEffect(() => {
    if (!data.length) {
      return;
    }
    if (data.length > COUNTRIES_TO_SHOW) {
      setCountries(data.slice(0, COUNTRIES_TO_SHOW));
    } else {
      setCountries(data.slice(0, data.length));
    }
  }, [data]);

  // handler for intersection observer:
  const showMoreCountries = () => {
    if (data.length <= countries.length) {
      return;
    }
    const diff = data.length - countries.length;
    if (diff > COUNTRIES_TO_SHOW) {
      console.log(222);
      setCountries(countries =>
        countries.concat(
          data.slice(countries.length, countries.length + COUNTRIES_TO_SHOW),
        ),
      );
    } else {
      console.log(333);
      setCountries(countries => countries.concat(data.slice(countries.length)));
    }
  };

  return (
    <main>
      <FindBar />
      <button onClick={showMoreCountries} type="button">
        Load more
      </button>
      <CountriesList data={countries} />
    </main>
  );
};
