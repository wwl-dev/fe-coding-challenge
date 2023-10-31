import { createApi } from '@reduxjs/toolkit/query/react';

import { baseApiQuery } from '@redux/rtk/baseApiQuery';

import { ApiResponseList } from '@type/api';
import { Album } from '@type/album';

export const trendingApi = createApi({
  tagTypes: ['Trending'],
  reducerPath: 'trendingApi',
  baseQuery: baseApiQuery,
  endpoints: (build) => ({
    getTrending: build.query<ApiResponseList<Album>, void>({
      query: () => ({
        url: '/trending',
        method: 'GET'
      })
    }),
  })
});

export const {
  useGetTrendingQuery,
  useLazyGetTrendingQuery
} = trendingApi;
