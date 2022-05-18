import { RefObject, useEffect, useState } from 'react';
import { ICountry } from '../types/ICountry';

export const useInfiniteScroll = (
  data: ICountry[] | undefined,
  numberCountriesToRender: number,
  refLiElement: RefObject<HTMLLIElement>,
): ICountry[] => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [numberToShow, setNumberToShow] = useState(numberCountriesToRender);

  useEffect(() => {
    if (!data) {
      return;
    }
    setCountries(data.slice(0, numberToShow));
  }, [data, numberToShow]);

  useEffect(() => {
    if (!countries.length || (data && data.length - countries.length < 1)) {
      return;
    }

    const listObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[entries.length - 1].isIntersecting) {
          observer.unobserve(refLiElement.current as HTMLLIElement);
          setNumberToShow(state => state + numberCountriesToRender);
        }
      },
      {
        threshold: 0.1,
      },
    );

    listObserver.observe(refLiElement.current as HTMLLIElement);
  }, [data, refLiElement, countries, numberCountriesToRender]);

  return countries;
};
