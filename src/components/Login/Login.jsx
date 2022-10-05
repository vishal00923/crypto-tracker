import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { signInUser } from '../../utils/firebase';

import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { sxStyles } from './Login.styles';

const defaultFields = {
  email: '',
  password: '',
};

export default function Login() {
  const [fields, setFields] = useState(defaultFields);
  const { email, password } = fields;

  const { setNotifications, setCurrentUser } = useContext(UserContext);

  const handleSubmit = async () => {
    if (!email || !password) {
      setNotifications({
        open: true,
        type: 'error',
        message: 'Please fill in all fields',
      });
      return;
    }

    try {
      const { user } = await signInUser(email, password);

      setNotifications({
        open: true,
        type: 'success',
        message: 'Welcome back! ' + (user.displayName || user.email),
      });
      setCurrentUser(user);
      setFields(defaultFields);
    } catch (error) {
      setNotifications({
        open: true,
        type: 'error',
        message: error.message,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <Box sx={sxStyles.container}>
      <TextField
        onChange={handleChange}
        label="Email"
        type="email"
        name="email"
        value={email}
      />
      <TextField
        onChange={handleChange}
        label="Password"
        type="password"
        name="password"
        value={password}
      />
      <Button onClick={handleSubmit} sx={sxStyles.button}>
        login
      </Button>
    </Box>
  );
}
