import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';
import React, { useRef } from 'react';
import { useGetAllCountriesQuery } from 'redux/countriesAPI/countriesAPI';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

export const Home = () => {
  const { data = [] } = useGetAllCountriesQuery();
  const liElement = useRef<HTMLLIElement>(null);

  const countries = useInfiniteScroll(data, 12, liElement) || 12;
  // const [numberToShow, setNumberToShow] = useState(0);
  // const NUMBER_TO_SHOW = 12;
  //
  // useEffect(() => {
  //   setNumberToShow(NUMBER_TO_SHOW);
  // }, []);
  //
  // const addCountriesToShow = () => {
  //   setNumberToShow(state => state + NUMBER_TO_SHOW);
  // };
  //
  // const listItemRef = useRef<HTMLLIElement>(null);
  //
  // useEffect(() => {
  //   if (!data.length || numberToShow >= data.length) {
  //     return;
  //   }
  //
  //   const listObserver = new IntersectionObserver(
  //     (entries, observer) => {
  //       if (entries[entries.length - 1].isIntersecting) {
  //         observer.unobserve(listItemRef.current as HTMLLIElement);
  //         addCountriesToShow();
  //       }
  //     },
  //     {
  //       threshold: 1,
  //     },
  //   );
  //
  //   listObserver.observe(listItemRef.current as HTMLLIElement);
  // }, [numberToShow, data]);

  return (
    <main>
      <FindBar />
      <button type="button">Load more</button>
      <CountriesList
        data={countries ? countries : data.slice(0, 12)}
        listItemRef={liElement}
      />
    </main>
  );
};
