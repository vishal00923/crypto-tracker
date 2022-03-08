import { makeStyles, createTheme } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.375rem',
    },
    tableTitle: {
        fontFamily: 'Poppins',
        fontSize: '1.925rem',
        textTransform: 'capitalize',
        marginBottom: '1.125rem',
    },
    textField: {
        width: '100%',
        marginBottom: '1.275rem',
    },
    row: {
        backgroundColor: '#16171A',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#131111',
        },
        fontFamily: 'Poppins',
    },
    pagination: {
        '& .MuiPaginationItem-root': {
            color: '#FFE900',
        },
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
