import { createTheme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: '#FFF89A',
        fontFamily: 'Poppins',
        fontWeight: 500,
        cursor: 'pointer',
    },
}));

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        type: 'dark',
    },
});
