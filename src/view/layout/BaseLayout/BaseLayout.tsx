import { Outlet } from 'react-router-dom';
import Snackbar from '@components/common/SnackBar';

export const BaseLayout: React.FC = () => {
  return (
    <Snackbar>
      <Outlet />
    </Snackbar>
  );
};
