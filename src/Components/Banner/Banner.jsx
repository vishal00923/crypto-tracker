import React from 'react';
import { Container, Typography } from '@material-ui/core';

import Carousal from '../Carousal/Carousal';

import { useStyles } from './styles';

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagLine}>
                    <Typography style={{ fontFamily: 'Poppins', fontWeight: 600, marginBottom: 16 }} variant="h2" color="initial" component="h1">
                        Crypto Tracker
                    </Typography>
                    <Typography
                        style={{ fontFamily: 'Poppins', textTransform: 'capitalize', letterSpacing: 1, color: 'darkgray', textAlign: 'center' }}
                        variant="h6"
                        component="p"
                    >
                        get all the information regarding your favorite crypto currency
                    </Typography>
                </div>

                <Carousal />
            </Container>
        </div>
    );
};

export default Banner;
