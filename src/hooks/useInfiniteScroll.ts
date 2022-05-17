import { RefObject, useCallback, useEffect, useState } from 'react';
import { ICountry } from '../types/ICountry';

export const useInfiniteScroll = (
  data: ICountry[],
  numberCountriesToRender: number,
  refLiElement: RefObject<HTMLLIElement>,
): ICountry[] => {
  const [numberToShow, setNumberToShow] = useState(0);
  const [countries, setCountries] = useState<ICountry[]>(
    data.slice(0, numberToShow),
  );

  useEffect(() => {
    setNumberToShow(numberCountriesToRender);
  }, [numberCountriesToRender]);

  const addCountriesToShow = useCallback(() => {
    setNumberToShow(state => state + numberCountriesToRender);
  }, [numberCountriesToRender]);

  useEffect(() => {
    setCountries(data.slice(0, numberCountriesToRender - 1));
  }, [data.length, numberCountriesToRender]);

  useEffect(() => {
    if (!data.length || numberToShow >= data.length) {
      return;
    }

    console.log('It works');

    const listObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[entries.length - 1].isIntersecting) {
          observer.unobserve(refLiElement.current as HTMLLIElement);
          addCountriesToShow();
        }
      },
      {
        threshold: 0.1,
      },
    );

    listObserver.observe(refLiElement.current as HTMLLIElement);
  }, [numberToShow, data, addCountriesToShow, refLiElement]);

  console.log(countries);
  return countries;

  //  receive original data array, numbers of rendered countries,
  //  return array countries for render, ref?
  //  ADD real ref to hook and return only array of countries
};
