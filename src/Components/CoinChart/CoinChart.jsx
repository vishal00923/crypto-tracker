import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, ThemeProvider } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { useStyles, darkTheme } from './styles';

const CoinChart = ({ coin, currency }) => {
  const [days, setDays] = useState(1);
  const [historicalData, setHistoricalData] = useState([]);

  const id = coin.id;
  const classes = useStyles();

  useEffect(() => {
    // Fetch Historical Chart Data
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

    const fetchHistoricalChart = async () => {
      const { data } = await axios.get(url);

      setHistoricalData(data.prices);
    };

    fetchHistoricalChart();
  }, [id, currency, days]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicalData ? (
          <CircularProgress className={classes.circularProgress} />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let hours = date.getHours();
                  let minutes = date.getMinutes();
                  let time =
                    hours > 12
                      ? `${hours - 12}:${minutes} PM`
                      : `${hours}:${minutes} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days) in ${currency}`,
                    borderColor: '#eebc1d',
                  },
                ],
              }}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinChart;
