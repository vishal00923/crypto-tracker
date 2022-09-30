import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CoinProvider } from './contexts/coinContext';
import { CoinsProvider } from './contexts/coinsContext';
import { CurrencyProvider } from './contexts/currencyContext';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Fragment>
    <BrowserRouter>
      <CoinProvider>
        <CoinsProvider>
          <CurrencyProvider>
            <App />
          </CurrencyProvider>
        </CoinsProvider>
      </CoinProvider>
    </BrowserRouter>
  </Fragment>
);
