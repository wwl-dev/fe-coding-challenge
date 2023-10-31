import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Theme } from '@components/Theme';

import { router } from '@view/router';

function App() {
  return (
    <Theme>
      <CssBaseline />
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
