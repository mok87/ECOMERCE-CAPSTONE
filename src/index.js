import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './context/cart'
import { UserProvider } from './context/user';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>
      {/* add User provider */}
        <App />
      </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,

);

reportWebVitals();

