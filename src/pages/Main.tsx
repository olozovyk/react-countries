import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
} from 'redux/countriesAPI/countriesAPI';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

export const Main = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [region, setRegion] = useState<string>('');
  const [skip, setSkip] = useState<boolean>(true);

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

  const countriesToShow = useInfiniteScroll(countries, 12, refLiElement) || [];

  return (
    <main>
      <FindBar />
      <CountriesList data={countriesToShow} refLiElement={refLiElement} />
    </main>
  );
};
