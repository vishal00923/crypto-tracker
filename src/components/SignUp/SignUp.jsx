import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { createUser, createUserDocument } from '../../utils/firebase';

import { Box, Button, TextField } from '@mui/material';

import { sxStyles } from './SignUp.styles';

const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUp() {
  const [fields, setFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = fields;

  const { setNotifications, setCurrentUser } = useContext(UserContext);

  const handleSubmit = async () => {
    if (!displayName || !email || !password || !confirmPassword) {
      setNotifications({
        open: true,
        type: 'error',
        message: 'Please fill in all fields',
      });
    } else if (password !== confirmPassword) {
      setNotifications({
        open: true,
        type: 'error',
        message: 'Passwords do not match',
      });
    } else {
      try {
        const { user } = await createUser(email, password);

        setCurrentUser(user);
        setFields(defaultFields);
        setNotifications({
          open: true,
          type: 'success',
          message: 'Sign Up Successfull 🎉. Welcome ' + (displayName || email),
        });
        await createUserDocument(user, { displayName });
      } catch (e) {
        setNotifications({
          open: true,
          type: 'error',
          message: e.message,
        });
      }
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
        label="Name"
        type="name"
        name="displayName"
        value={displayName}
      />
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
      <TextField
        onChange={handleChange}
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
      />
      <Button onClick={handleSubmit} sx={sxStyles.button}>
        sign up
      </Button>
    </Box>
  );
}
