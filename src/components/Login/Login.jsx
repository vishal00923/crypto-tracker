import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { sxStyles } from './Login.styles';

export default function Login() {
  return (
    <Box sx={sxStyles.container}>
      <TextField label="Enter Email" type="email" />
      <TextField label="Enter Password" type="password" />
      <Button sx={sxStyles.button}>login</Button>
    </Box>
  );
}
