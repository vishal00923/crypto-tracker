import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  btn: {
    fontFamily: 'Poppins',
    backgroundColor: '#eebc1d',
    '&:hover': {
      backgroundColor: '#ffcb47',
    },
  },
  orText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 18,
  },
}));
