import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({ alert, setAlert }) => {
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3500} onClose={handleClose}>
      <MuiAlert
        variant="filled"
        elevation={10}
        severity={alert.type}
        onClose={handleClose}
      >
        {alert.msg}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
