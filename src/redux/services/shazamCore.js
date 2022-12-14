import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '27fc70fa18msh041d7a6061fedabp1da46fjsne199c00f7075',
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
