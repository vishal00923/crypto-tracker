import React, { useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import { useStyles } from './styles';

const AuthModal = ({ setAlert }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const classes = useStyles();

  // Event Handlers
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Sing In With Google Functionality
  const googleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        setAlert({
          open: true,
          type: 'success',
          msg: `Sign Up Successful. Welcome ${res.user.email}`,
        });
        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          type: 'error',
          msg: error.message,
        });
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
              }}
            >
              <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                style={{ borderRadius: 8 }}
              >
                <Tab label="Login" style={{ fontFamily: 'Poppins' }} />
                <Tab label="Sign Up" style={{ fontFamily: 'Poppins' }} />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Login handleClose={handleClose} setAlert={setAlert} />
            )}
            {value === 1 && (
              <SignUp handleClose={handleClose} setAlert={setAlert} />
            )}

            <Box className={classes.google}>
              <GoogleButton
                style={{
                  width: '100%',
                  outline: 'none',
                  borderRadius: 3,
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  textAlign: 'center',
                }}
                onClick={signInWithGoogle}
              />
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
