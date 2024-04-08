import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store/app-store';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer transition={Zoom} autoClose={2000} />
      <App />
    </Provider>
  </React.StrictMode>
);
