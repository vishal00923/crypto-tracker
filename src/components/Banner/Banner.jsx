import { Box } from '@mui/system';
import { Typography, Container } from '@mui/material';

import Carousal from '../Carousal/Carousal';

import { sxStyles } from './Banner.styles';

export default function Banner() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(./banner.jpg)`,
          width: '100%',
          height: '52vh',
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

          <Container sx={{ marginTop: '5%' }}>
            <Carousal />
          </Container>
        </Box>
      </div>
    </>
  );
}
