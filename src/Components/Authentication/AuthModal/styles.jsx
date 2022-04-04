import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: 85,
    height: 40,
    backgroundColor: '#eebc1d',
    marginLeft: 2,
    '&:hover': {
      backgroundColor: '#ffcb47',
    },
    [theme.breakpoints.down('xs')]: {
      width: 80,
      height: 30,
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 480,
    backgroundColor: theme.palette.background.paper,
    color: '#fff',
    borderRadius: 4,
  },
}));
