import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { LoginProvider } from './context/LoginContext';
import { NotificationProvider } from './context/NotificationContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LoginProvider>
          <NotificationProvider> 
            <AppRoutes />
          </NotificationProvider>
        </LoginProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
