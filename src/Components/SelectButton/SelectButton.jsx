import React from 'react';
import { makeStyles } from '@material-ui/core';

const SelectButton = ({ label, selected, value, setDays }) => {
  const useStyles = makeStyles({
    buttonStyles: {
      textAlign: 'center',
      width: '22%',
      padding: 10,
      fontFamily: 'Poppins',
      fontWeight: selected ? 600 : 400,
      cursor: 'pointer',
      border: '1px solid #ffe900',
      borderRadius: 5,
      color: selected ? '#000' : '',
      backgroundColor: selected ? '#ffe900' : '',
      '&:hover': {
        backgroundColor: '#ffe900',
        color: '#000',
      },
    },
  });

  const classes = useStyles();

  return (
    <span className={classes.buttonStyles} onClick={() => setDays(value)}>
      {label}
    </span>
  );
};

export default SelectButton;
