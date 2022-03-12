import { createTheme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: '#FFE900',
    fontFamily: 'Poppins',
    fontWeight: 600,
    cursor: 'pointer',
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
