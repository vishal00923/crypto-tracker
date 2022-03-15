import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(./banner.jpg)`,
  },
  bannerContent: {
    height: '42vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 16,
    justifyContent: 'space-around',
  },
  tagLine: {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    zIndex: 100,
  },
  bannerTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  bannerText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
}));
