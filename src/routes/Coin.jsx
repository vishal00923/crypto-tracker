import { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../contexts/coinContext';

import { useParams } from 'react-router-dom';

import axios from 'axios';
import { singleCoinData } from '../api/apiEndpoints';

import { Box, LinearProgress } from '@mui/material';

import Chart from '../components/Chart/Chart';
import CoinDetails from '../components/CoinDetails/CoinDetails';

export default function Coin() {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { setCoin } = useContext(CoinContext);

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(singleCoinData(id));
      setCoin(data);
      setLoading(true);

      return data;
    };

    fetchCoin();
  }, [id, setCoin]);

  if (!loading) {
    return <LinearProgress sx={{ backgroundColor: '#EEBC1D', height: 4 }} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        },
        justifyContent: 'space-between',
        height: '92vh',
        padding: '32px 0',
      }}
    >
      <CoinDetails />
      <Chart />
    </Box>
  );
}
