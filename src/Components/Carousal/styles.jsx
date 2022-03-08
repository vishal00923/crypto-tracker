import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    carousal: {
        height: '50%',
        display: 'flex',
        alignItems: 'center',
    },
    carousalItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: 400,
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
}));

// For Responsive Carousal
export const responsive = {
    0: {
        items: 1,
    },
    512: {
        items: 3,
    },
    1200: {
        items: 5,
    },
};
