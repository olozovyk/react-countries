import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICountry } from 'types/ICountry';

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