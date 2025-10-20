import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FindBar } from '../../components/FindBar/FindBar';
import { CountriesList } from '../../components/CountriesList/CountriesList';
import { useGetCountriesByRegionQuery } from '../../redux/countriesAPI/countriesAPI';
import debounce from 'lodash.debounce';

export const RegionCountries = () => {
  const LIMIT_INIT = 6;

  const [limit, setLimit] = useState(LIMIT_INIT);
  const [query, setQuery] = useState<string>('');

  const params = useParams();
  const region = params.region ?? '';

  const { data: countries = [] } = useGetCountriesByRegionQuery(region);

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
      if (!refLiElement.current) return;

      if (entry.isIntersecting) {
        setLimit(prev => prev + LIMIT_INIT);
        observer.unobserve(refLiElement.current);
      }
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
