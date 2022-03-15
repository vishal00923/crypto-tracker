import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

import CoinChart from '../Components/CoinChart/CoinChart';

import { numberWithCommas } from '../util';

// Styles
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  sidebar: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.525rem',
    borderRight: '2px solid grey',
  },
  img: {
    height: 200,
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '3.125rem',
    fontWeight: '600',
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.875rem',
    },
  },
  description: {
    width: '100%',
    fontFamily: 'Poppins',
    padding: '1.825rem',
    paddingBottom: '1.312rem',
    paddingTop: 0,
    textAlign: 'justify',
  },
  marketData: {
    alignSelf: 'start',
    padding: '1.825rem',
    paddingTop: '1.312rem',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'start',
    },
  },
  rank: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  rankVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
  currentPrice: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    marginRight: '1.125rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  currentPriceVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
  marketCap: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    marginRight: '1.125rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  marketCapVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
}));

const CoinPage = ({ symbol, currency }) => {
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const classes = useStyles();

  // console.log(id);

  useEffect(() => {
    // Fetch Coin
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    const fetchCoin = async () => {
      const { data } = await axios.get(url);

      setCoin(data);
    };

    fetchCoin();
  }, [id]);

  //   console.log(coin);

  if (!coin) {
    return <LinearProgress style={{ backgroundColor: '#ffe900' }} />;
  }

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
        </div>
      </div>

      {/* Chart JS */}
      <CoinChart coin={coin} currency={currency} />
    </div>
  );
};

export default CoinPage;
