import { createBrowserRouter, useLoaderData as useReactRouterLoaderData } from 'react-router-dom';

import { BaseLayout } from '@view/layout/BaseLayout/BaseLayout';

import { publicRoutes } from './routes';
import { PublicRoute } from '@view/shared/PublicRoute';

import type { Route } from './routes';

const getRouteLoadData = (
  route: Route
): {
  showTopBar?: boolean;
} => ({
  showTopBar: route.showTopBar !== false
});

export const useRouterData = (): ReturnType<typeof getRouteLoadData> => {
  const data = useReactRouterLoaderData() as ReturnType<typeof getRouteLoadData>;
  return data;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      ...publicRoutes.map((route) => ({
        ...route,
        loader: () => getRouteLoadData(route),
        element: <PublicRoute layout={route.layout}>{route.element}</PublicRoute>
      })),
    ]
  }
]);
