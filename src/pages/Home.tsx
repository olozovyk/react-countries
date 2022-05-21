import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import React, { useRef } from 'react';
import { useGetAllCountriesQuery } from 'redux/countriesAPI/countriesAPI';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

export const Home = () => {
  const { data } = useGetAllCountriesQuery();
  const refLiElement = useRef<HTMLLIElement>(null);
  const countries = useInfiniteScroll(data, 12, refLiElement) || [];

  // Get region parameter
  // If !region -> navigate to 404
  // select default corresponding region

  return (
    <main>
      <FindBar />
      <CountriesList data={countries} refLiElement={refLiElement} />
    </main>
  );
};
