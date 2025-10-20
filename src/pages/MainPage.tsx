import { useParams } from 'react-router-dom';
import { RegionCountries } from '../components/RegionCountries/RegionCountries.tsx';
import { AllCountries } from '../components/AllCountries/AllCountries.tsx';

export const MainPage = () => {
  const params = useParams();
  const region = params.region;

  return <main>{region ? <RegionCountries /> : <AllCountries />}</main>;
};
