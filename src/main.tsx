import { Provider as ReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from '@redux/store';
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)
