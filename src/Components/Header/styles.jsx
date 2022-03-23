import { createTheme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: '#FFE900',
    fontFamily: 'Poppins',
    fontWeight: 600,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16.5,
    },
  },
  boxSelect: {
    width: 85,
    height: 40,
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      width: 80,
      height: 30,
    },
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
