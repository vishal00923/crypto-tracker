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

import { useState } from 'react';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function Auth() {
  const [tabValue, setTabValue] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleModalClose = () => {
    setModalStatus(false);
  };

  const handleModalOpen = () => {
    setModalStatus(true);
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
          <Paper style={sxStyles.paper}>
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
              <GoogleButton style={sxStyles.googleBtn} />
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
}
