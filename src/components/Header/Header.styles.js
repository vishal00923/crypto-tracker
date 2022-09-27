import { styled, Button } from '@mui/material';

export const sxStyles = {
  appBar: {
    backgroundColor: '#05040C',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
};

export const StyledButton = styled(Button)({
  fontWeight: '600',
  color: '#000',
  minWidth: 100,
  backgroundColor: '#EEBC1D',
  padding: '8px 0',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#EEBC1D',
  },
});
