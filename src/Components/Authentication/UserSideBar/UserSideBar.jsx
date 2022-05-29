import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Button } from '@material-ui/core';

import { useStyles } from './styles';

import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const UserSideBar = ({ user, setAlert }) => {
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

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserSideBar;
