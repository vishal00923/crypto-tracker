import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';

import { useStyles } from './styles';

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Box p={3.2} className={classes.box}>
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        className={classes.btn}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <Typography variant="p" color="initial" className={classes.orText}>
        Or
      </Typography>
    </Box>
  );
};

export default SignUp;
