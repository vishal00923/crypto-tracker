import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Container, Typography, Select, MenuItem, ThemeProvider, Toolbar } from '@material-ui/core';

import { useStyles, darkTheme } from './styles';

const Header = ({ currency, setCurrency }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    const handleChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={handleClick} className={classes.title} variant="h5" component="h1">
                            Crypto Tracker
                        </Typography>

                        <Select
                            onChange={handleChange}
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 12,
                            }}
                            value={currency}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
