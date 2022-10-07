import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import { Avatar, Box, Button, Drawer, Typography } from '@mui/material';
import { sxStyles } from './Sidebar.styles';

import { signOutUser } from '../../utils/firebase';
import { CoinsContext } from '../../contexts/coinsContext';

export default function Sidebar() {
  const [drawerState, setDrawerState] = useState(false);

  const { coins } = useContext(CoinsContext);
  const { currentUser, setCurrentUser, setNotifications, watchlist } =
    useContext(UserContext);

  const { displayName, photoURL, email } = currentUser;

  const toggleDrawer = (open) => (e) => {
    const { type, key } = e;
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  console.log(watchlist, coins);

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
        sx={{ cursor: 'pointer' }}
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
              {displayName || email}
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

            <Box sx={{ marginTop: '16px', width: '100%', overflow: 'scroll' }}>
              {coins.map((coin) => {
                const { id, name, image } = coin;
                const isCoinInWatchlist = watchlist.includes(id);

                return (
                  isCoinInWatchlist && (
                    <Box
                      key={id}
                      sx={{
                        display: 'flex',
                        gap: '8px',
                        backgroundColor: '#fff',
                        marginBottom: '12px',
                        padding: '24px 64px',
                        height: '20%',
                      }}
                      display="flex"
                      alignItems="center"
                    >
                      <Avatar src={image} alt={name} />
                      <Typography
                        sx={{ color: '#000' }}
                        variant="body1"
                        component="p"
                      >
                        {name}
                      </Typography>
                    </Box>
                  )
                );
              })}
            </Box>
          </Box>

          <Button onClick={handleLogout} sx={sxStyles.logoutBtn}>
            log out
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
