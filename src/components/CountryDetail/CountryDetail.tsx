import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailCountryQuery } from 'redux/countriesAPI/countriesAPI';

export const CountryDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isError } = useGetDetailCountryQuery(params.country || '');

  useEffect(() => {
    if (isError) {
      navigate('/404');
    }
  }, [isError, navigate]);

  if (data) {
    console.log(data[0]);
  }

  return <div>{data && data[0].name.common}</div>;
};
