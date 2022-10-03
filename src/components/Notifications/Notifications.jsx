import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import { Alert, Snackbar } from '@mui/material';

export default function Notifications() {
  const { notifications, setNotifications } = useContext(UserContext);
  const { open, message, type } = notifications;

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotifications({ ...notifications, open: false });
  };

  return (
    <Snackbar
      onClose={handleClose}
      open={open}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        elevation={10}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
