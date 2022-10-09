import { useContext } from 'react';
import { CoinContext } from '../../contexts/coinContext';
import { UserContext } from '../../contexts/userContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas } from '../../utils/helper';

import { db } from '../../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';

import { sxStyles } from './CoinDetails.styles';

export default function CoinDetails() {
  const { coin } = useContext(CoinContext);
  const { currentUser, setNotifications, watchlist } = useContext(UserContext);
  const { currency, currencySymbol } = useContext(CurrencyContext);

  const { id, image, name, description, market_cap_rank, market_data } = coin;

  const isCoinInWatchlist = watchlist.includes(id);

  const handleAddToWatchList = async () => {
    const coinDocRef = doc(db, 'watchlist', currentUser.uid);

    try {
      await setDoc(
        coinDocRef,
        {
          coins: watchlist ? [...watchlist, id] : [id],
        },
        { marge: true }
      );

      setNotifications({
        open: true,
        type: 'success',
        message: `${name} added to watchlist`,
      });
    } catch (e) {
      setNotifications({
        open: true,
        type: 'error',
        message: e.message,
      });
    }
  };

  const handleRemoveFromWatchlist = async () => {
    const coinDocRef = doc(db, 'watchlist', currentUser.uid);

    try {
      await setDoc(
        coinDocRef,
        {
          coins: watchlist.filter((coinId) => coinId !== id),
        },
        { marge: true }
      );

      setNotifications({
        open: true,
        type: 'success',
        message: `${name} removed from watchlist`,
      });
    } catch (e) {
      setNotifications({
        open: true,
        type: 'error',
        message: e.message,
      });
    }
  };

  return (
    <Box sx={sxStyles.containerBox}>
      <Box sx={sxStyles.box1}>
        <img
          style={{ marginBottom: '20px', height: '200px' }}
          src={image?.large}
          alt={name}
        />
        <Typography sx={{ fontWeight: '700' }} variant="h3" component="h2">
          {name}
        </Typography>
      </Box>

      <Box sx={sxStyles.box2}>
        <Typography sx={sxStyles.coinDescription} variant="h6" component="p">
          {ReactHtmlParser(description?.en.split('. ')[0] + '.')}
        </Typography>
      </Box>

      <Box sx={sxStyles.box3}>
        <Box sx={sxStyles.boxItem}>
          <Typography sx={sxStyles.coinSubTitle} variant="h4" component="h3">
            Rank :-
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h6"
            component="p"
          >
            {market_cap_rank}
          </Typography>
        </Box>

        <Box sx={sxStyles.boxItem}>
          <Typography sx={sxStyles.coinSubTitle} variant="h4" component="h3">
            Current Price :-
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h6"
            component="p"
          >
            {currencySymbol +
              ' ' +
              numberWithCommas(
                market_data?.current_price[currency.toLowerCase()]
              )}
          </Typography>
        </Box>

        <Box sx={sxStyles.boxItem}>
          <Typography sx={sxStyles.coinSubTitle} variant="h4" component="h3">
            Market Cap :-
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h6"
            component="p"
          >
            {currencySymbol +
              ' ' +
              numberWithCommas(
                market_data?.market_cap[currency.toLowerCase()]
              )?.slice(0, -6) +
              'M'}
          </Typography>
        </Box>

        {currentUser && (
          <Box sx={sxStyles.addToWatchListBtnBox}>
            <Button
              onClick={
                isCoinInWatchlist
                  ? handleRemoveFromWatchlist
                  : handleAddToWatchList
              }
              sx={{
                ...sxStyles.addToWatchListBtn,
                color: isCoinInWatchlist ? '#fff' : '#000',
                backgroundColor: isCoinInWatchlist ? '#ff0000' : '#EEBC1D',
                '&:hover': {
                  backgroundColor: isCoinInWatchlist ? '#ff0000' : '#EEBC1D',
                },
              }}
            >
              {isCoinInWatchlist ? 'remove from watchlist' : 'add to watchlist'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
