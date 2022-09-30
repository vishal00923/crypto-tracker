import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
  },
});
