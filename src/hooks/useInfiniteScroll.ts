import { RefObject, useEffect, useState } from 'react';

export const useInfiniteScroll = (
  data: ICountry[] | undefined,
  numberCountriesToRender: number,
  refLiElement: RefObject<HTMLLIElement>,
): ICountry[] => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [numberToShow, setNumberToShow] = useState(numberCountriesToRender);

  // If there are countries in data and data changed, it updates countries array in order to
  // send it to component:
  useEffect(() => {
    if (!data) {
      return;
    }
    setCountries(data.slice(0, numberToShow));
  }, [data, numberToShow]);

  // If data changed sets initial numberToShow
  useEffect(() => {
    setNumberToShow(numberCountriesToRender);
    // Countries array must be set in above useEffect. To do refactoring this hook!
    setCountries(state => state.slice(0, numberCountriesToRender));
  }, [data, numberCountriesToRender]);

  // If first countries rendered, it creates instance of intersection observer, hang it
  // on the last item of the list:
  useEffect(() => {
    if (
      !countries.length ||
      (data && data.length - countries.length < 1) ||
      countries.length !== numberToShow ||
      !refLiElement.current
    ) {
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
  }, [
    data,
    refLiElement,
    countries.length,
    numberCountriesToRender,
    numberToShow,
  ]);

  return countries;
};
