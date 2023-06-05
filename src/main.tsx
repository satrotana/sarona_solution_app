import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './styles/tailwindcss.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <App />
    </Provider>
  </React.StrictMode>
);
