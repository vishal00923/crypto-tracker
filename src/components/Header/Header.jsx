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
} from '@mui/material';

import { UserContext } from '../../contexts/userContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import { sxStyles } from './Header.styles';

import Auth from '../Auth/Auth';
import Sidebar from '../Sidebar/Sidebar';
import { currencyTable } from '../../utils/helper';

export default function Header() {
  const { currency, setCurrency, setCurrencySymbol } =
    useContext(CurrencyContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    const currencyValue = currencyTable[value];

    setCurrency(value);
    setCurrencySymbol(currencyValue);
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <AppBar sx={sxStyles.appBar} position="sticky">
      <Container sx={sxStyles.container}>
        <Box>
          <Typography
            onClick={handleNavigate}
            sx={sxStyles.logo}
            variant="h6"
            component="h2"
          >
            Crypto Tracker
          </Typography>
        </Box>

        <Box sx={sxStyles.formControlContainer}>
          <FormControl sx={sxStyles.formControl}>
            <InputLabel>{currency}</InputLabel>
            <Select
              onChange={handleChange}
              sx={{
                height: {
                  xs: 32,
                  sm: 36,
                  md: 42,
                  lg: 42,
                  xl: 45,
                },
                fontSize: {
                  xs: '.75rem',
                  sm: '.95rem',
                },
              }}
              value={currency}
              label={currency}
            >
              {Object.keys(currencyTable).map((key) => (
                <MenuItem key={key} value={`${key}`}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {currentUser ? <Sidebar /> : <Auth />}
        </Box>
      </Container>
    </AppBar>
  );
}
