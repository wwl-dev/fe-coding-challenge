import { trendingApi } from './trending';

export * from './trending';

export const apiServiceReducers = {
  [trendingApi.reducerPath]: trendingApi.reducer,
};

export const apiServiceMiddlewares = [
  trendingApi.middleware,
];
