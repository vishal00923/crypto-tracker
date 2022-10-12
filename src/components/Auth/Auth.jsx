import {
  Button,
  AppBar,
  Box,
  Fade,
  Modal,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import { sxStyles } from './Auth.styles';
import { GoogleButton } from 'react-google-button';

import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { signInWithGoogle } from '../../utils/firebase';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function Auth() {
  const [tabValue, setTabValue] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const { setNotifications } = useContext(UserContext);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleModalClose = () => {
    setModalStatus(false);
  };

  const handleModalOpen = () => {
    setModalStatus(true);
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithGoogle();

      setNotifications({
        open: true,
        type: 'success',
        message: 'Welcome ' + (user.displayName || user.email),
      });
    } catch (error) {
      setNotifications({
        open: true,
        type: 'error',
        message: error.message,
      });
    }
  };

  return (
    <Box>
      <Button
        onClick={handleModalOpen}
        sx={sxStyles.button}
        variant="contained"
      >
        login
      </Button>

      <Modal
        onClose={handleModalClose}
        open={modalStatus}
        closeAfterTransition
        sx={sxStyles.modal}
      >
        <Fade in={modalStatus}>
          <Paper sx={sxStyles.paper}>
            <AppBar position="static" sx={{ background: 'transparent' }}>
              <Tabs
                onChange={handleTabChange}
                sx={{ borderRadius: '2px' }}
                value={tabValue}
                variant="fullWidth"
              >
                <Tab label="Login" sx={sxStyles.tab} />
                <Tab label="Sign Up" sx={sxStyles.tab} />
              </Tabs>
            </AppBar>
            {tabValue ? <SignUp /> : <Login />}

            <Box sx={sxStyles.googleBtnBox}>
              <GoogleButton
                onClick={handleGoogleLogin}
                style={sxStyles.googleBtn}
              />
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
}
