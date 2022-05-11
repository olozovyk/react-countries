import { FindBar } from 'components/FindBar/FindBar';
import { CountriesList } from 'components/CountriesList/CountriesList';

export const Home = () => {
  return (
    <main>
      <FindBar />
      <CountriesList />
    </main>
  );
};
