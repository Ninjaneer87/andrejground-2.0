import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem .5rem',
    borderRadius: '2rem',
    backgroundColor: theme.palette.custom.cardBgColor,
    border: `1px solid ${theme.palette.custom.borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    margin: '0 auto',
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    zIndex: 1,
    [theme.breakpoints.up(600)]: {
      padding: '2rem',
    },
    // [theme.breakpoints.up(992)]: {
    //   backdropFilter: 'blur(4px)',
    // },
    '&:hover': {
      border: `1px solid ${theme.palette.custom.accent}`,
    }
  },
  content: {
    margin: '1.5rem 0',
  }
}))
const DefaultCard = (props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ maxWidth: props.maxWidth || '100%', height: props.height || '100%' }}
    >
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default React.memo(DefaultCard);