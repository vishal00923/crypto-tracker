import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  sidebar: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.525rem',
    borderRight: '2px solid grey',
  },
  img: {
    height: 200,
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '3.125rem',
    fontWeight: '600',
    marginBottom: 12,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.875rem',
    },
  },
  description: {
    width: '100%',
    fontFamily: 'Poppins',
    padding: '1.825rem',
    paddingBottom: '1.312rem',
    paddingTop: 0,
    textAlign: 'justify',
  },
  marketData: {
    alignSelf: 'start',
    padding: '1.825rem',
    paddingTop: '1.312rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    [theme.breakpoints.down('xs')]: {
      alignItems: 'start',
    },
  },
  rank: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  rankVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
  currentPrice: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    marginRight: '1.125rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  currentPriceVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
  marketCap: {
    fontFamily: 'Poppins',
    fontSize: '1.925rem',
    fontWeight: 600,
    marginRight: '1.125rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.375rem',
    },
  },
  marketCapVal: {
    fontFamily: 'Poppins',
    fontSize: '1.575rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.275rem',
    },
  },
  button: {
    marginTop: 16,
  },
}));
