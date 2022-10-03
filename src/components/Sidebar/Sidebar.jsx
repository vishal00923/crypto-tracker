import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import { Avatar, Box, Button, Drawer, Typography } from '@mui/material';
import { sxStyles } from './Sidebar.styles';

import { signOutUser } from '../../utils/firebase';

export default function Sidebar() {
  const [drawerState, setDrawerState] = useState(false);

  const { currentUser, setCurrentUser, setNotifications } =
    useContext(UserContext);
  const { displayName, photoURL, email } = currentUser;

  const toggleDrawer = (open) => (e) => {
    const { type, key } = e;
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  const handleLogout = () => {
    signOutUser();
    setCurrentUser(null);
    setNotifications({
      open: true,
      type: 'success',
      message: 'You have been logged out',
    });
  };

  return (
    <>
      <Avatar
        onClick={toggleDrawer(true)}
        src={photoURL}
        alt={displayName || email}
      />
      <Drawer onClose={toggleDrawer(false)} anchor="right" open={drawerState}>
        <Box sx={sxStyles.sidebar}>
          <Box sx={sxStyles.sidebarBox1}>
            <Avatar
              sx={sxStyles.sidebarBox1Avatar}
              src={photoURL}
              alt={displayName || email}
            />

            <Typography
              sx={sxStyles.sidebarBox1Name}
              variant="h5"
              component="p"
            >
              {displayName}
            </Typography>
          </Box>

          <Box sx={sxStyles.sidebarBox2}>
            <Typography
              sx={sxStyles.sidebarBox2SubTitle}
              variant="body2"
              component="p"
            >
              watchlist
            </Typography>
          </Box>

          <Button onClick={handleLogout} sx={sxStyles.logoutBtn}>
            log out
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
