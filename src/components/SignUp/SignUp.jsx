import { Box, Button, TextField } from '@mui/material';

import { sxStyles } from './SignUp.styles';

export default function SignUp() {
  return (
    <Box sx={sxStyles.container}>
      <TextField label="Enter Email" type="email" />
      <TextField label="Enter Password" type="password" />
      <TextField label="Confirm Password" type="password" />
      <Button sx={sxStyles.button}>sign up</Button>
    </Box>
  );
}
