import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useStyles } from './styles';

const SignUp = ({ handleClose, setAlert }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        msg: 'Password do not match',
        type: 'error',
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);

      setAlert({
        open: true,
        msg: `Sign Up Successfull. Welcome ${result.user.email}`,
        type: 'success',
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
