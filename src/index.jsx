import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/userContext';
import { CoinProvider } from './contexts/coinContext';
import { CoinsProvider } from './contexts/coinsContext';
import { CurrencyProvider } from './contexts/currencyContext';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <BrowserRouter>
      <CoinsProvider>
        <CoinProvider>
          <UserProvider>
            <CurrencyProvider>
              <App />
            </CurrencyProvider>
          </UserProvider>
        </CoinProvider>
      </CoinsProvider>
    </BrowserRouter>
  </>
);
