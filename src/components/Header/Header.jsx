import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import {
  AppBar,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
} from '@mui/material';

import { CurrencyContext } from '../../contexts/currencyContext';

import { sxStyles, StyledButton } from './Header.styles';
import { theme } from '../../App.styles';

export default function Header() {
  const { currency, setCurrency, setCurrencySymbol } =
    useContext(CurrencyContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    const currencyValue = value === 'INR' ? '₹' : '$';

    setCurrency(value);
    setCurrencySymbol(currencyValue);
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={sxStyles.appBar} position="sticky">
        <Container sx={sxStyles.container}>
          <Box>
            <Typography
              onClick={handleNavigate}
              sx={{ color: '#FFD700', fontWeight: '700', cursor: 'pointer' }}
              variant="h6"
              component="h2"
            >
              Crypto Tracker
            </Typography>
          </Box>

          <Box
            sx={{
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Currency</InputLabel>
              <Select
                sx={{ height: 42 }}
                value={currency}
                label="Currency"
                onChange={handleChange}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
              </Select>
            </FormControl>
            <StyledButton variant="contained">login</StyledButton>
          </Box>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
