import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import {
  TableContainer,
  TextField,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  LinearProgress,
} from '@mui/material';

import { CoinsContext } from '../../contexts/coinsContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import axios from 'axios';
import { coinsListData } from '../../api/apiEndpoints';
import { numberWithCommas } from '../../utils/helper';

import { sxStyles } from './CoinsTable.styles';

const tableHeaders = ['Coin', 'Price', '24h Change', 'Market Cap'];

export default function CoinsTable() {
  const [page, setPage] = useState(0);
  const [searchCoin, setSearchCoin] = useState('');

  const navigate = useNavigate();
  const { currency, currencySymbol } = useContext(CurrencyContext);
  const { coins, setCoins } = useContext(CoinsContext);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(coinsListData(currency));
      setCoins(data);

      return data;
    };

    fetchCoins();
  }, [currency, setCoins]);

  const filteredCoins = coins.filter(
    ({ name, symbol }) =>
      name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      symbol.toLowerCase().includes(searchCoin.toLowerCase())
  );

  const handleSearchField = (e) => {
    const { value } = e.target;
    setSearchCoin(value);
  };

  const handleRowClick = (id) => {
    navigate(`/coins/${id}`);
  };

  const handleChangePage = (_, value) => {
    setPage(value - 1);
    window.scroll(0, 500);
  };

  return (
    <Box sx={sxStyles.box}>
      <Container>
        <Typography sx={sxStyles.title} variant="h4" component="h2">
          Cryptocurrency Prices by Market Cap
        </Typography>

        <TextField
          onChange={handleSearchField}
          sx={sxStyles.textField}
          label="Search For a Crypto Currency"
          variant="outlined"
        />

        <TableContainer component={Paper}>
          {coins.length === 0 ? (
            <LinearProgress sx={{ backgroundColor: '#EEBC1D' }} />
          ) : (
            <Table sx={sxStyles.table} aria-label="coins table">
              <TableHead sx={{ backgroundColor: '#EEBC1D' }}>
                <TableRow>
                  {tableHeaders.map((header) => (
                    <TableCell
                      key={header}
                      align="center"
                      sx={{ color: '#000', fontWeight: '700' }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredCoins.slice(page * 10, page * 10 + 10).map((coin) => {
                  const {
                    id,
                    name,
                    image,
                    symbol,
                    current_price,
                    market_cap,
                    price_change_percentage_24h,
                  } = coin;

                  const profit =
                    price_change_percentage_24h >= 0 ? true : false;

                  return (
                    <TableRow
                      onClick={() => handleRowClick(id)}
                      key={id}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell
                        component="td"
                        scope="row"
                        align="left"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px',
                        }}
                      >
                        <img style={{ height: 50 }} src={image} alt={name} />
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.2px',
                          }}
                        >
                          <Typography
                            sx={{ fontSize: '1.375rem' }}
                            variant="h6"
                            component="p"
                          >
                            {symbol.toUpperCase()}
                          </Typography>
                          <Typography
                            sx={{ fontSize: '1rem', opacity: 0.7 }}
                            variant="h6"
                            component="p"
                          >
                            {name}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          sx={{ fontSize: '1rem' }}
                          variant="h6"
                          component="p"
                        >
                          {currencySymbol +
                            ' ' +
                            numberWithCommas(current_price.toFixed(2))}
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          sx={{
                            color: profit ? '#00FF00' : '#FF0000',
                            fontSize: '1rem',
                          }}
                          variant="h6"
                          component="p"
                        >
                          {profit && '+'}
                          {price_change_percentage_24h.toFixed(2) + '%'}
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Typography
                          sx={{ fontSize: '1rem' }}
                          variant="h6"
                          component="p"
                        >
                          {currencySymbol + ' ' + numberWithCommas(market_cap)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        <Pagination
          onChange={handleChangePage}
          sx={sxStyles.pagination}
          count={10}
        ></Pagination>
      </Container>
    </Box>
  );
}
