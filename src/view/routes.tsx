import { Navigate, type RouteObject } from 'react-router-dom';

import Home from '@pages/Home/Home';
import NotFound from '@pages/NotFound/NotFound';

export type Route = RouteObject & {
  layout?: React.FC<{ children: React.ReactNode }>;
  showTopBar?: Boolean;
};

export const publicRoutes: Route[] = [
  {
    index: true,
    element: <Navigate to="home" replace />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
