import { useGetAllCountriesQuery } from './redux/countriesAPI/countriesAPI';

function App() {
  const { data = [] } = useGetAllCountriesQuery();

  return (
    <ul>
      {data.map(country => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  );
}

export default App;
