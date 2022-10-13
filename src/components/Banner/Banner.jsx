import { Box } from '@mui/system';
import { Typography, Container } from '@mui/material';

import Carousal from '../Carousal/Carousal';

import { sxStyles } from './Banner.styles';

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(./banner.jpg)`,
        width: '100%',
        height: {
          xs: '60vh',
          sm: '52vh',
          md: '80vh',
          lg: '70vh',
          xl: '55vh',
        },
        objectFit: 'cover',
      }}
    >
      <Box sx={sxStyles.box}>
        <Typography sx={sxStyles.heading} variant="h2" component="h1">
          Crypto Tracker
        </Typography>
        <Typography sx={sxStyles.description} variant="p">
          Get All The Info Regarding Your Favorite Crypto Currency
        </Typography>

        <Container
          sx={{
            marginTop: {
              xs: '25%',
              sm: '15%',
              md: '10%',
              lg: '5%',
              xl: '5%',
            },
          }}
        >
          <Carousal />
        </Container>
      </Box>
    </Box>
  );
}
