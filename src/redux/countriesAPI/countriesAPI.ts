import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesAPI = createApi({
  reducerPath: 'countriesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: builder => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => '/all',
    }),
    getCountriesByRegion: builder.query<ICountry[], string>({
      query: region => `/region/${region}`,
    }),
    getCountryByName: builder.query<ICountry[], string>({
      query: country => `/name/${country}?fullText=true`,
    }),
    getCountriesByCodes: builder.query<ICountry[], string>({
      query: codes => `/alpha?codes=${codes}`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
  useGetCountryByNameQuery,
  useGetCountriesByCodesQuery,
} = countriesAPI;
