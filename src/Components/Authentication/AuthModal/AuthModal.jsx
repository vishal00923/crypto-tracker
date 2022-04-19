import React, { useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';

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
            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && (
              <SignUp handleClose={handleClose} setAlert={setAlert} />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
