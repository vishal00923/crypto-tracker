import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '../../contexts/currencyContext';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { responsive, sxStyles } from './Carousal.styles';

import axios from 'axios';
import { numberWithCommas } from '../../utils/helper';
import { trendingCoinsData } from '../../api/apiEndpoints';

export default function Carousal() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const { currency, currencySymbol } = useContext(CurrencyContext);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(trendingCoinsData(currency));
      setTrendingCoins(data);

      return data;
    };

    fetchTrendingCoins();
  }, [currency]);

  const items = trendingCoins.map((coin) => {
    const {
      id,
      name,
      image,
      symbol,
      current_price,
      price_change_percentage_24h,
    } = coin;

    const profit = price_change_percentage_24h >= 0 ? true : false;

    return (
      <Link
        to={`/coins/${id}`}
        key={id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img style={{ height: 80 }} src={image} alt={name} />
        <Box sx={sxStyles.coinDetailsBox}>
          <Typography sx={{ fontSize: '.9rem' }} variant="h6" component="span">
            {symbol.toUpperCase()}
          </Typography>
          <Typography
            style={{ color: profit ? '#00FF00' : '#FF0000', fontSize: '.9rem' }}
            variant="h6"
            component="span"
          >
            {profit && '+'}
            {price_change_percentage_24h.toFixed(2) + '%'}
          </Typography>
        </Box>
        <Typography
          sx={{ color: '#fff', marginTop: '4px', fontWeight: '600' }}
          variant="h6"
          component="p"
          color="initial"
        >
          {currencySymbol + ' ' + numberWithCommas(current_price.toFixed(2))}
        </Typography>
      </Link>
    );
  });

  return (
    <div style={{ height: '50%', display: 'flex', alignItems: 'center' }}>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        infinite={true}
        autoPlayDirection
        autoPlayInterval={100}
        responsive={responsive}
        animationDuration={2000}
        disableDotsControls={true}
        disableButtonsControls={true}
        items={items}
      ></AliceCarousel>
    </div>
  );
}
