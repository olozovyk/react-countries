import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import React, { useEffect, useRef, useState } from 'react';
import { useGetAllCountriesQuery } from 'redux/countriesAPI/countriesAPI';

export const Home = () => {
  const { data = [] } = useGetAllCountriesQuery();
  const [countriesToShow, setCountriesToShow] = useState(0);
  const COUNTRIES_TO_SHOW = 12;

  useEffect(() => {
    setCountriesToShow(COUNTRIES_TO_SHOW);
  }, []);

  const addCountriesToShow = () => {
    setCountriesToShow(state => state + COUNTRIES_TO_SHOW);
  };

  const listItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!data.length || countriesToShow >= data.length) {
      return;
    }

    const listObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[entries.length - 1].isIntersecting) {
          observer.unobserve(listItemRef.current as HTMLLIElement);
          addCountriesToShow();
        }
      },
      {
        threshold: 1,
      },
    );

    listObserver.observe(listItemRef.current as HTMLLIElement);
  }, [countriesToShow, data]);

  return (
    <main>
      <FindBar />
      <button type="button">Load more</button>
      <CountriesList
        data={data.slice(0, countriesToShow - 1)}
        listItemRef={listItemRef}
      />
    </main>
  );
};
