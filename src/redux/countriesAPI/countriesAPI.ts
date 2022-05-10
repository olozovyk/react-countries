import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*
  "name": {
      "common": "Uruguay",
  }
  "population": 11111,
  "region": "Americas",
  "capital": ["Montevideo"],
  "flags": {
      "png": "https://.../"
  }
*/

interface ICountry {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
}

export const countriesAPI = createApi({
  reducerPath: 'countriesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: builder => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => '/all',
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesAPI;
