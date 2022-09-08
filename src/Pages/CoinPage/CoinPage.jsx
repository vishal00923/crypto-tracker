import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress, Typography, Button } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import CoinChart from '../../Components/CoinChart/CoinChart';

import { numberWithCommas, singleCoin } from '../../util';

import { useStyles } from './styles';

const CoinPage = ({
  symbol,
  currency,
  user,
  setAlert,
  watchlist,
  setWatchlist,
}) => {
  const [coin, setCoin] = useState();

  const { id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    // Fetch Coin
    const fetchCoin = async () => {
      const { data } = await axios.get(singleCoin(id));

      setCoin(data);
      return data;
    };

    fetchCoin();
  }, [id]);

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, 'watchlist', user.uid);

      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log('No Items in Watchlist');
        }
      });

      return () => {
        unsubscribe();
      };
    }
  });

  if (!coin) {
    return <LinearProgress style={{ backgroundColor: '#ffe900' }} />;
  }

  // Present In Watchlist
  const inWatchlist = watchlist.includes(coin.id);

  // Add To Watchlist
  const addToWatchlist = async () => {
    const coinRef = doc(db, 'watchlist', user.uid);

    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist ? [...watchlist, coin.id] : [coin.id],
        },
        { marge: true }
      );

      setAlert({
        open: true,
        type: 'success',
        msg: `${coin.name} Added to the Watchlist`,
      });
    } catch (error) {
      setAlert({
        open: true,
        type: 'error',
        msg: error.message,
      });
    }
  };

  // Rmove From Watchlist
  const removeFromWatchlist = async () => {
    const coinRef = doc(db, 'watchlist', user.uid);

    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist.filter((watch) => watch !== coin.id),
        },
        { marge: true }
      );

      setAlert({
        open: true,
        type: 'success',
        msg: `${coin.name} Remove from the Watchlist`,
      });
    } catch (error) {
      setAlert({
        open: true,
        type: 'error',
        msg: error.message,
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img className={classes.img} src={coin.image.large} alt={coin.name} />
        <Typography className={classes.title} variant="h1">
          {coin.name}
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          {ReactHtmlParser(coin.description.en.split('. ')[0])}.
        </Typography>

        <div className={classes.marketData}>
          <span style={{ display: 'flex', marginBottom: '1.215rem' }}>
            <Typography className={classes.rank} variant="h4" component="p">
              Rank: &nbsp;
            </Typography>
            <Typography className={classes.rankVal} variant="h5" component="p">
              {coin.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: 'flex', marginBottom: '1.215rem' }}>
            <Typography
              className={classes.currentPrice}
              variant="h4"
              component="p"
            >
              Currenct Price:
            </Typography>
            <Typography
              className={classes.currentPriceVal}
              variant="h5"
              component="p"
            >
              {symbol}{' '}
              {numberWithCommas(
                coin.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography
              className={classes.marketCap}
              variant="h4"
              component="p"
            >
              Market Cap:
            </Typography>
            <Typography
              className={classes.marketCapVal}
              variant="h5"
              component="p"
            >
              {symbol}{' '}
              {numberWithCommas(
                coin.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>

          {user && (
            <Button
              className={classes.button}
              variant="outlined"
              style={{
                width: '100%',
                height: 40,
                backgroundColor: inWatchlist ? '#ff0000' : '#EEBC1D',
              }}
              onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
            >
              {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </Button>
          )}
        </div>
      </div>

      {/* Chart JS */}
      <CoinChart coin={coin} currency={currency} />
    </div>
  );
};

export default CoinPage;
