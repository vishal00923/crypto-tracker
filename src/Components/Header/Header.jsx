import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Container,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';

import AuthModal from '../Authentication/AuthModal/AuthModal';
import UserSideBar from '../Authentication/UserSideBar/UserSideBar';

import { useStyles, darkTheme } from './styles';

const Header = ({ currency, setCurrency, setSymbol, setAlert, user }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setCurrency(e.target.value);

    if (e.target.value === 'INR') {
      setSymbol('₹');
    } else {
      setSymbol('$');
    }

    // console.log(symbol);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container style={{ zIndex: 100 }}>
          <Toolbar>
            <Typography
              onClick={handleClick}
              className={classes.title}
              variant="h5"
              component="h2"
            >
              Crypto Tracker
            </Typography>

            <Select
              className={classes.boxSelect}
              onChange={handleChange}
              variant="outlined"
              value={currency}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>

            {user ? (
              <UserSideBar user={user} setAlert={setAlert} />
            ) : (
              <AuthModal setAlert={setAlert} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
