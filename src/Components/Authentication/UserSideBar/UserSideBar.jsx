import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Button } from '@material-ui/core';

import { useStyles } from './styles';

const UserSideBar = ({ user }) => {
  const [state, setState] = useState({ right: false });

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // logout functionality
  const logout = () => {};

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
                <div className={classes.watchList}></div>
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
