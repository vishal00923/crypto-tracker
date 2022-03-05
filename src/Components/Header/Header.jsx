import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, Typography, Select, MenuItem, ThemeProvider, Toolbar } from '@material-ui/core';

import { useStyles, darkTheme } from './styles';

const Header = ({ currency, setCurrency }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const handleChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container style={{ paddingTop: 12, paddingBottom: 16, zIndex: 100 }}>
                    <Toolbar>
                        <Typography onClick={handleClick} className={classes.title} variant="h5" component="h2">
                            Crypto Tracker
                        </Typography>

                        <Select
                            onChange={handleChange}
                            variant="outlined"
                            style={{
                                width: 116,
                                height: 34,
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
