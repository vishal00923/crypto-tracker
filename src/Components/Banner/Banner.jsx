import React from 'react';
import { Container, Typography } from '@material-ui/core';

import Carousal from '../Carousal/Carousal';

import { useStyles } from './styles';

const Banner = ({ currency, symbol }) => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagLine}>
          <Typography
            style={{ fontFamily: 'Poppins', fontWeight: 600, marginBottom: 8 }}
            variant="h2"
            color="initial"
            component="h1"
          >
            Crypto Tracker
          </Typography>
          <Typography
            style={{
              fontFamily: 'Poppins',
              textTransform: 'capitalize',
              color: 'darkgray',
              textAlign: 'center',
            }}
            variant="h6"
            component="p"
          >
            get all the information regarding your favorite crypto currency
          </Typography>
        </div>

        <Carousal currency={currency} symbol={symbol} />
      </Container>
    </div>
  );
};

export default Banner;
