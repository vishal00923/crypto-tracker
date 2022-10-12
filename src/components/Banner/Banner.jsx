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
          xs: '45vh',
          sm: '48vh',
          md: '52vh',
          lg: '55vh',
          xl: '58vh',
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
              xs: '20%',
              sm: '20%',
              md: '15%',
              lg: '10%',
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
