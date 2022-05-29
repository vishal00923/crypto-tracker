import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

import { useStyles, responsive } from './styles';
import { numberWithCommas } from '../../util';

const Carousal = ({ currency, symbol }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // For Trending Coins
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      );

      setTrendingCoins([...data]);
    };

    fetchTrendingCoins();
  }, [currency]);

  // console.log(trendingCoins);

  const items = trendingCoins.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0;

    // console.log(profit);

    return (
      <Link to={`/coins/${coin.id}`} className={classes.carousalItem}>
        <img
          src={coin.image}
          alt={coin.name}
          style={{
            height: 72,
            marginBottom: 10,
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: profit ? '#00ff00' : '#ff0000',
          }}
        >
          {coin.symbol}
          &nbsp;
          <span>
            {profit && '+'} {coin.price_change_percentage_24h.toFixed(2) + '%'}
          </span>
        </span>

        <span
          style={{
            fontSize: '1.375rem',
            fontWeight: 500,
          }}
        >
          {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className={classes.carousal}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={100}
        animationDuration={1200}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      ></AliceCarousel>
    </div>
  );
};

export default Carousal;
