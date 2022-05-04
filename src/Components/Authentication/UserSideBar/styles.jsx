import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  avataar: {
    height: 40,
    widht: 40,
    cursor: 'pointer',
    backgroundColor: '#eebc1d',
  },
  container: {
    width: 520,
    height: '100%',
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Poppins',
  },
  profile: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    height: '92%',
  },
  picture: {
    width: 100,
    height: 100,
    cursor: 'pointer',
    backgroundColor: '#eebc1d',
    objectFit: 'contain',
  },
  spanText: {
    widht: '100%',
    fontSize: 20,
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  logout: {
    width: '100%',
    height: '5%',
    backgroundColor: '#eebc1d',
    marginTop: 20,
    fontWeight: 'bold',
  },
}));
