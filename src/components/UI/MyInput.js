import { FormControl, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
  return {
    field: {
      margin: theme.spacing(2, 0),
      display: 'block',
    },
  }
});

const StyledTextField = withStyles(theme => ({
  root: {
    '& label': {
      color: theme.palette.custom.textColor,
      opacity: 0.5,
    },
    '& label.Mui-focused ': {
      opacity: 1,
    },
    '& .MuiOutlinedInput-root': {
      color: theme.palette.custom.textColor,
      '& fieldset': {
        borderColor: theme.palette.custom.textColor,
        opacity: 0.5,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.custom.textColor,
        opacity: 1,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.custom.accent,
        opacity: 1,
      },
    },
  },
}))(TextField);

const MyInput = (props) => {
  const classes = useStyles();
  let inputElement = null;

  switch (props.elementType) {
    case ('text-input'):
      inputElement = <FormControl
        className={classes.field}
        fullWidth
      >
        <StyledTextField
          fullWidth
          variant='outlined'
          onChange={props.inputHandler}
          label={props.label}
          color='secondary'
          required={props.required}
          spellCheck="false"
          value={props.value || ''}
        />
      </FormControl>;
      break;


    case ('text-area'):
      inputElement = <FormControl
        className={classes.field}
        fullWidth
      >
        <StyledTextField
          fullWidth
          variant='outlined'
          onChange={props.inputHandler}
          label={props.label}
          color='secondary'
          multiline
          rows={4}
          rowsMax={6}
          required={props.required}
          spellCheck="false"
          value={props.value || ''}
        />
      </FormControl>
      break;


    default:
      break;
  }

  return inputElement;
};

export default React.memo(MyInput);