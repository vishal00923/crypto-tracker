import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 590,
      md: 820,
      lg: 1124,
      mobile: 393,
      tablet: 640,
      laptop: 1024,
      iphoneXR: 414,
      surfaceDuo: 540,
    },
  },
});
