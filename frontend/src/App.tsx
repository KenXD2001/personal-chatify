import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import ToastProvider, { showToast } from './Toast';

const App = () => {
  return (
    <BrowserRouter>
      <ToastProvider />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
