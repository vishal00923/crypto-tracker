import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: `url(./banner.jpg)`,
    },
    bannerContent: {
        height: '42vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 24,
        justifyContent: 'space-around',
    },
    tagLine: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
}));
