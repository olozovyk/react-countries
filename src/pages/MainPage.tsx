import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindBar } from '../components/FindBar/FindBar';
import { CountriesList } from '../components/CountriesList/CountriesList';
import {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
} from '../redux/countriesAPI/countriesAPI';
import debounce from 'lodash.debounce';
import { ICountry } from '../types/country.interface.ts';

export const MainPage = () => {
  const LIMIT_INIT = 6;

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [limit, setLimit] = useState(LIMIT_INIT);
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

  const params = useParams();

  useEffect(() => {
    if (params.region) {
      setRegion(params.region);
      setSkip(false);
      // isSuccess and isLoading added in order to prevent middle flashed renders
      if (countriesByRegion && isSuccess && !isLoading) {
        setCountries(countriesByRegion.filter(country => country.name.common));
      }
    } else {
      setRegion('');
      setSkip(true);
      if (allCountries) {
        setCountries(allCountries.filter(country => country.name.common));
      }
    }
  }, [allCountries, countriesByRegion, isLoading, isSuccess, params.region]);

  useEffect(() => {
    setLimit(LIMIT_INIT);
  }, [params.region]);

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

  const countriesToShow = searchedCountries.slice(0, limit);

  const refLiElement = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (!refLiElement.current || !entry.isIntersecting) return;

      setLimit(prev => prev + LIMIT_INIT);
      observer.unobserve(refLiElement.current);
    }, {});

    if (refLiElement.current) {
      observer.observe(refLiElement.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [countriesToShow]);

  return (
    <main>
      <FindBar searchChangeHandler={searchChangeHandler} />
      <CountriesList data={countriesToShow} refLiElement={refLiElement} />
    </main>
  );
};
