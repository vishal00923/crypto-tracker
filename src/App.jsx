import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';

import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

import useStyles from './styles';

const App = () => {
    const [currency, setCurrency] = useState('INR');
    const [symbol, setSymbol] = useState('₹');

    const classes = useStyles();

    return (
        <div className={classes.app}>
            <Header currency={currency} setCurrency={setCurrency} setSymbol={setSymbol} />

            <Routes>
                <Route path="/" element={<HomePage currency={currency} symbol={symbol} />} />
                <Route path="/coins/:id" element={<CoinPage />} />
            </Routes>
        </div>
    );
};

export default App;
