import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  ThemeProvider,
  TableContainer,
  Paper,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { useStyles, darkTheme } from './styles';
import { numberWithCommas } from '../../util';

const CoinsTable = ({ currency, symbol }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const classes = useStyles();

  // Table Header Values
  const tHead = ['Coin', 'Price', '24h Change', 'Market Cap'];

  // console.log(coins);

  useEffect(() => {
    // Fetch Coins
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

    const fetchCoins = async () => {
      const { data } = await axios.get(url);

      setCoins([...data]);
      setLoading(false);
    };

    fetchCoins();
  }, [currency]);

  // Searching Functionality
  const searchCoins = () => {
    const filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchInput) ||
        coin.symbol.toLowerCase().includes(searchInput)
    );

    return filteredCoins;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.container}>
        <Typography className={classes.tableTitle} variant="h4" component="h3">
          cryptocurrency prices by market cap
        </Typography>

        <TextField
          className={classes.textField}
          label="Search For a Crypto Currency.."
          variant="outlined"
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress
              style={{
                backgroundColor: '#FFE900',
              }}
            />
          ) : (
            <Table aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: '#EEBC1D',
                }}
              >
                <TableRow>
                  {tHead.map((row) => (
                    <TableCell
                      key={row}
                      align="center"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        color: '#000',
                      }}
                    >
                      {row}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {searchCoins()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((coin) => {
                    const profit = coin.price_change_percentage_24h >= 0;

                    return (
                      <TableRow
                        key={coin.id}
                        className={classes.row}
                        onClick={() => navigate(`/coins/${coin.id}`)}
                      >
                        <TableCell
                          component="td"
                          scope="row"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.375rem',
                          }}
                        >
                          <img
                            src={coin.image}
                            alt={coin.name}
                            style={{
                              height: 52,
                              marginRight: '1.175rem',
                            }}
                          />
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '1.325rem',
                                textTransform: 'uppercase',
                              }}
                            >
                              {coin.symbol}
                            </span>
                            <span
                              style={{
                                opacity: 0.6,
                              }}
                            >
                              {coin.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: 'center',
                          }}
                        >{`${symbol} ${numberWithCommas(
                          coin.current_price.toFixed(2)
                        )}`}</TableCell>
                        <TableCell
                          style={{
                            textAlign: 'center',
                            fontWeight: 500,
                            color: profit ? '#00ff00' : '#ff0000',
                          }}
                        >
                          {profit && '+'}
                          {coin.price_change_percentage_24h.toFixed(2) + '%'}
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          {`${symbol} ${numberWithCommas(
                            coin.market_cap.toString().slice(0, -6)
                          )}M`}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        <Pagination
          className={classes.pagination}
          count={10}
          style={{
            width: '100%',
            padding: '1.325rem',
            display: 'flex',
            justifyContent: 'center',
          }}
          onChange={(_, val) => {
            setPage(val);
            window.scroll(0, 452);
          }}
        ></Pagination>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
