import { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../contexts/coinContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import { Box, CircularProgress } from '@mui/material';
import { Line } from 'react-chartjs-2';

import axios from 'axios';
import { previousCoinData } from '../../api/apiEndpoints';

import { sxStyles, StyledButton } from './Chart.styles';
import { chartDetails } from '../../utils/helper';

export default function Chart() {
  const [days, setDays] = useState(1);
  const [previousData, setPreviousData] = useState([]);

  const { coin } = useContext(CoinContext);
  const { currency } = useContext(CurrencyContext);

  const { id } = coin;

  useEffect(() => {
    const fetchPreviousCoinData = async () => {
      const { data } = await axios.get(previousCoinData(id, currency, days));
      setPreviousData(data.prices);

      return data;
    };

    fetchPreviousCoinData();
  }, [id, currency, days]);

  const handleDays = (value) => {
    setDays(value);
  };

  return (
    <Box sx={sxStyles.container}>
      {previousData.length === 0 ? (
        <CircularProgress sx={{ color: '#EEBC1D' }} size={250} thickness={2} />
      ) : (
        <>
          <Line
            data={{
              labels: previousData.map((coin) => {
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
                  data: previousData.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                  borderColor: '#eebc1d',
                },
              ],
            }}
            options={{ elements: { point: { radius: 1 } } }}
          />

          <Box sx={sxStyles.daysButton}>
            {chartDetails.map(({ label, value }) => {
              const selected = value === days ? true : false;

              return (
                <StyledButton
                  key={value}
                  onClick={() => handleDays(value)}
                  sx={{
                    fontWeight: selected && '700',
                    color: selected && '#000',
                    backgroundColor: selected && '#eebc1d',
                  }}
                >
                  {label}
                </StyledButton>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
}
