import { useContext } from 'react';
import { CoinContext } from '../../contexts/coinContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas } from '../../utils/helper';

import { sxStyles } from './CoinDetails.styles';

export default function CoinDetails() {
  const { coin } = useContext(CoinContext);
  const { currency, currencySymbol } = useContext(CurrencyContext);
  const { image, name, description, market_cap_rank, market_data } = coin;

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
            Rank:
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h4"
            component="p"
          >
            {market_cap_rank}
          </Typography>
        </Box>

        <Box sx={sxStyles.boxItem}>
          <Typography sx={sxStyles.coinSubTitle} variant="h4" component="h3">
            Current Price:
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h4"
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
            Market Cap:
          </Typography>
          <Typography
            sx={sxStyles.coinSubTitleValue}
            variant="h4"
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
      </Box>
    </Box>
  );
}
