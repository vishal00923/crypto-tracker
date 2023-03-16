import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';

import Carousal from '../Carousal/Carousal';

import { theme } from './Banner.styles';

export const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(./banner.jpg)`,
          width: '100%',
          height: {
            xs: '52vh',
            lg: '58vh',
            laptop: '85vh',
            mobile: '42vh',
            iphoneXR: '40vh',
            surfaceDuo: '55vh',
          },
          objectFit: 'cover',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: {
              xs: '32px',
              md: '90px',
              mobile: '45px',
              iphoneXR: '42px',
              surfaceDuo: '65px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: {
                xs: '2rem',
                sm: '2.275rem',
                md: '2.675rem',
                lg: '2.975rem',
                xl: '3rem',
              },
              fontWeight: '900',
              marginBottom: '14px',
              letterSpacing: '2px',
            }}
            variant='h2'
            component='h1'
          >
            Crypto Tracker
          </Typography>
          <Typography
            sx={{
              color: '#ffffff',
              opacity: '0.6',
              fontFamily: 'Montserrat',
              textAlign: 'center',
              paddingLeft: '8px',
              paddingRight: '8px',
            }}
            variant='p'
          >
            Get All The Info Regarding Your Favorite Crypto Currency
          </Typography>

          <Container
            sx={{
              marginTop: {
                xs: '60px',
                md: '112px',
                iphoneXR: '50px',
                surfaceDuo: '90px',
              },
            }}
          >
            <Carousal />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
