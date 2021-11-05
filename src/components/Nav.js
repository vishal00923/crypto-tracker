import React, { useState } from 'react';

import Coin from './Coin';

import './Nav.css';

const Nav = (props) => {
    const [search, setSearch] = useState('');

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const filteredCoins = props.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <nav className="coin-search">
            <h1 className="coin-text">Search Coin</h1>
            <form>
                <input type="text" placeholder="Search" className="coin-input" onChange={searchHandler} />
            </form>
            {filteredCoins.map((coin) => (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    volume={coin.total_volume}
                    priceChange={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap}
                />
            ))}
        </nav>
    );
};

export default Nav;
