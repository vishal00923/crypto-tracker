import { styled, Button } from '@mui/material';

export const sxStyles = {
  container: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '100%',
      lg: '70%',
      xl: '70%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
    padding: '48px',
  },

  daysButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '32px',
  },
};

export const StyledButton = styled(Button)({
  textAlign: 'center',
  outline: 'none',
  marginRight: '12px',
  border: '2px solid #eebc1d',
  '&:hover': {
    fontWeight: '700',
    color: '#000',
    backgroundColor: '#eebc1d',
  },
});
