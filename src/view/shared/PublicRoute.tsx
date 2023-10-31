import Layout from '@view/layout/Layout/Layout';

interface LayoutProps {
  children: React.ReactNode;
  layout?: React.FC<{ children: React.ReactNode }>;
}

export const PublicRoute: React.FC<LayoutProps> = ({ children, layout: RouteLayout = Layout }) => {
  return <RouteLayout>{children}</RouteLayout>;
};
