import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './utils/services/cartItems';
ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      
    <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


