import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
} from 'redux/countriesAPI/countriesAPI';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import debounce from 'lodash.debounce';

export const Main = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [region, setRegion] = useState<string>('');
  const [skip, setSkip] = useState<boolean>(true);
  const [query, setQuery] = useState<string>('');

  const { data: allCountries } = useGetAllCountriesQuery();
  const {
    data: countriesByRegion,
    isSuccess,
    isLoading,
  } = useGetCountriesByRegionQuery(region, {
    skip,
  });

  const refLiElement = useRef<HTMLLIElement>(null);

  const params = useParams();

  useEffect(() => {
    if (params.region) {
      setRegion(params.region);
      setSkip(false);
      if (countriesByRegion && isSuccess && !isLoading) {
        setCountries(countriesByRegion);
      }
    } else {
      setRegion('');
      setSkip(true);
      if (allCountries) {
        setCountries(allCountries);
      }
    }
  }, [allCountries, countriesByRegion, isLoading, isSuccess, params.region]);

  const searchChangeHandler = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value.trim().toLowerCase());
    },
    300,
  );

  const searchedCountries = useMemo(() => {
    return countries.filter(country => {
      if (query.length >= 2) {
        return country.name.common
          .toLocaleLowerCase()
          .includes(query.toLowerCase());
      } else {
        return country;
      }
    });
  }, [countries, query]);

  const countriesToShow =
    useInfiniteScroll(searchedCountries, 12, refLiElement) || [];

  return (
    <main>
      <FindBar searchChangeHandler={searchChangeHandler} />
      <CountriesList data={countriesToShow} refLiElement={refLiElement} />
    </main>
  );
};
