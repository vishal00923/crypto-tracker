import { makeStyles, createTheme } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1.825rem',
    padding: '2.825rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: 0,
      padding: '1.475rem',
      paddingTop: 0,
    },
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-around',
  },
}));

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
});
