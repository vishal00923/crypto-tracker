import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { CoinsContext } from '../../contexts/coinsContext';
import { CurrencyContext } from '../../contexts/currencyContext';

import { Avatar, Box, Button, Drawer, Typography } from '@mui/material';
import { AiFillDelete } from 'react-icons/ai';
import { sxStyles } from './Sidebar.styles';

import { numberWithCommas } from '../../utils/helper';
import { signOutUser, doc, db, setDoc } from '../../utils/firebase';

export default function Sidebar() {
  const [drawerState, setDrawerState] = useState(false);

  const { coins } = useContext(CoinsContext);
  const { currencySymbol } = useContext(CurrencyContext);
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

  const handleLogout = () => {
    signOutUser();
    setCurrentUser(null);
    setNotifications({
      open: true,
      type: 'success',
      message: 'You have been logged out',
    });
  };

  const handleRemoveFromWatchlist = async (id, name) => {
    const coinDocRef = doc(db, 'watchlist', currentUser.uid);

    try {
      await setDoc(
        coinDocRef,
        {
          coins: watchlist.filter((coinId) => coinId !== id),
        },
        { marge: true }
      );

      setNotifications({
        open: true,
        type: 'success',
        message: `${name} removed from Watchlist`,
      });
    } catch (e) {
      setNotifications({
        open: true,
        type: 'error',
        message: e.message,
      });
    }
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

          <>
            <Typography
              sx={sxStyles.sidebarBox2SubTitle}
              variant="body2"
              component="p"
            >
              watchlist
            </Typography>

            <Box sx={sxStyles.sidebarWatchlist}>
              {coins.map((coin) => {
                const { id, name, image, current_price } = coin;
                const isCoinInWatchlist = watchlist.includes(id);

                return (
                  isCoinInWatchlist && (
                    <Box key={id} sx={sxStyles.sidebarWatchlistItem}>
                      <Avatar src={image} alt={name} />
                      <Typography
                        sx={{ color: '#000' }}
                        variant="body1"
                        component="span"
                      >
                        {name}
                      </Typography>

                      <Box>
                        <Typography
                          sx={{ color: '#000' }}
                          variant="body1"
                          component="span"
                        >
                          {currencySymbol +
                            ' ' +
                            numberWithCommas(current_price)}
                        </Typography>
                      </Box>

                      <AiFillDelete
                        onClick={() => handleRemoveFromWatchlist(id, name)}
                        style={{ color: '#000', cursor: 'pointer' }}
                        fontSize="1.325rem"
                      />
                    </Box>
                  )
                );
              })}
            </Box>
          </>

          <Button onClick={handleLogout} sx={sxStyles.logoutBtn}>
            log out
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
