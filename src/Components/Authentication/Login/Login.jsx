import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';

import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useStyles } from './styles';

const Login = ({ handleClose, setAlert }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        msg: 'Please fill all the details',
        type: 'error',
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setAlert({
        open: true,
        msg: `LogIn Successfull. Welcome ${result.user.email}`,
      });

      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        msg: error.message,
        type: 'error',
      });
      return;
    }
  };

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
      <Button
        variant="contained"
        size="large"
        className={classes.btn}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Typography
        variant="h3"
        component="p"
        color="initial"
        className={classes.orText}
      >
        Or
      </Typography>
    </Box>
  );
};

export default Login;
