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
    return <LinearProgress sx={{ backgroundColor: '#EEBC1D', height: 8 }} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#1B1A22',
        height: '92vh',
      }}
    >
      <CoinDetails />
      <Chart />
    </Box>
  );
}
