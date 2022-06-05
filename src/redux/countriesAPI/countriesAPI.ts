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
    getDetailCountry: builder.query<ICountry[], string>({
      query: country => `/name/${country}?fullText=true`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
  useGetDetailCountryQuery,
} = countriesAPI;
