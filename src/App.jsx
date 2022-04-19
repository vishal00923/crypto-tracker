import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Alert from './Components/Alert/Alert';

import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

import useStyles from './styles';

const App = () => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  // For Creating Alert Messages
  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    type: 'success',
  });

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header
        currency={currency}
        setCurrency={setCurrency}
        setSymbol={setSymbol}
        setAlert={setAlert}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage currency={currency} symbol={symbol} />}
        />
        <Route
          path="/coins/:id"
          element={<CoinPage symbol={symbol} currency={currency} />}
        />
      </Routes>

      <Alert alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default App;
