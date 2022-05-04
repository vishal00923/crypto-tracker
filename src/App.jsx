import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Alert from './Components/Alert/Alert';

import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

import { auth } from '../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import useStyles from './styles';

const App = () => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');
  const [user, setUser] = useState(null);

  // For Creating Alert Messages
  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    type: 'success',
  });

  const classes = useStyles();

  // User Existence
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      },
      []
    );
  });

  return (
    <div className={classes.app}>
      <Header
        currency={currency}
        setCurrency={setCurrency}
        setSymbol={setSymbol}
        setAlert={setAlert}
        user={user}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage currency={currency} symbol={symbol} />}
        />
        <Route
          path="/coins/:id"
          element={
            <CoinPage
              symbol={symbol}
              currency={currency}
              user={user}
              setAlert={setAlert}
            />
          }
        />
      </Routes>

      <Alert alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default App;
