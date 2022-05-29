import React, { useState, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Button } from '@material-ui/core';
import { AiFillDelete } from 'react-icons/ai';

import { useStyles } from './styles';

import { signOut } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';

import { numberWithCommas } from '../../../util';

const UserSideBar = ({ user, setAlert, watchlist, coins, symbol }) => {
  const [state, setState] = useState({ right: false });

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Logout Functionality
  const logout = () => {
    signOut(auth);

    setAlert({ open: true, type: 'success', msg: 'Logout Successful' });
    toggleDrawer();
  };

  // Rmove From Watchlist
  const removeFromWatchlist = async (coin) => {
    const coinRef = doc(db, 'watchlist', user.uid);

    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist.filter((watch) => watch !== coin.id),
        },
        { marge: true }
      );

      setAlert({
        open: true,
        type: 'success',
        msg: `${coin.name} Remove from the Watchlist`,
      });
    } catch (error) {
      setAlert({
        open: true,
        type: 'error',
        msg: error.message,
      });
    }
  };

  return (
    <div>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <Avatar
            className={classes.avataar}
            src={user.photoURL}
            alt={user.dispayName || user.email}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.dispayName || user.email}
                />
                <span className={classes.spanText}>
                  {user.dispayName || user.email}
                </span>
                <div className={classes.watchList}>
                  <span
                    style={{
                      fontSize: 16,
                      textShadow: '0 0 5px black',
                      letterSpacing: '1.2px',
                    }}
                  >
                    Watchlist
                  </span>

                  {coins.map((coin) => {
                    if (watchlist.includes(coin.id)) {
                      return (
                        <div className={classes.coin} key={coin.id}>
                          <span>{coin.name}</span>
                          <span style={{ display: 'flex', gap: 12 }}>
                            {symbol}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                            <AiFillDelete
                              style={{ cursor: 'pointer' }}
                              fontSize="20"
                              onClick={() => removeFromWatchlist(coin)}
                            />
                          </span>
                        </div>
                      );
                    }

                    return console.log();
                  })}
                </div>
              </div>
              <Button
                className={classes.logout}
                variant="contained"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};

export default UserSideBar;
