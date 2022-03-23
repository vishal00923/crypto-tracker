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

import { useStyles } from './styles';

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
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
                onChange={(e, newValue) => setValue(newValue)}
                style={{ borderRadius: 8 }}
              >
                <Tab label="Login" style={{ fontFamily: 'Poppins' }} />
                <Tab label="Sign Up" style={{ fontFamily: 'Poppins' }} />
              </Tabs>
            </AppBar>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
