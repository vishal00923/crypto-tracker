import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Nav from './components/Nav';

import './App.css';

const App = () => {
    const [coins, setCoins] = useState([]);

    // Fetching Data From API
    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="app">
            <Nav coins={coins} />
        </div>
    );
};

export default App;
