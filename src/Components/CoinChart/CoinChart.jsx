import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, ThemeProvider } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import SelectButton from '../SelectButton/SelectButton';

import { useStyles, darkTheme } from './styles';
import { chartData } from '../../util';

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

  // console.log(chartData);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicalData.length ? (
          <CircularProgress
            style={{ color: '#ffe900' }}
            size={250}
            thickness={2.5}
          />
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
            <div className={classes.buttonContainer}>
              {chartData.map((item) => (
                <SelectButton
                  key={item.label}
                  label={item.label}
                  selected={item.value === days}
                  value={item.value}
                  setDays={setDays}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinChart;
