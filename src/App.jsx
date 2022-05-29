import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Alert from './Components/Alert/Alert';

import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage/CoinPage';

import { auth } from '../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import useStyles from './styles';

const App = () => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [coins, setCoins] = useState([]);

  // For Creating Alert Messages
  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    type: 'success',
  });

  const classes = useStyles();

  // User Existence
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return (
    <div className={classes.app}>
      <Header
        currency={currency}
        setCurrency={setCurrency}
        symbol={symbol}
        setSymbol={setSymbol}
        setAlert={setAlert}
        user={user}
        watchlist={watchlist}
        coins={coins}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currency={currency}
              symbol={symbol}
              coins={coins}
              setCoins={setCoins}
            />
          }
        />
        <Route
          path="/coins/:id"
          element={
            <CoinPage
              symbol={symbol}
              currency={currency}
              user={user}
              setAlert={setAlert}
              watchlist={watchlist}
              setWatchlist={setWatchlist}
            />
          }
        />
      </Routes>

      <Alert alert={alert} setAlert={setAlert} />
    </div>
  );
};

export default App;
