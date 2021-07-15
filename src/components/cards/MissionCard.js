import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem .5rem',
    borderRadius: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    border: `1px solid ${theme.palette.custom.borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    maxWidth: 400,
    margin: '0 auto',
    height: '100%',
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    [theme.breakpoints.up(600)]: {
      padding: '2rem',
    },
    [theme.breakpoints.up(992)]: {
      backdropFilter: 'blur(4px)',
    },
    '&:hover': {
      border: `1px solid ${theme.palette.custom.accent}`,
    }
  },
  imageContainer: {
    height: 150,
    width: 105,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    display: 'block',
    filter: `drop-shadow(0px 0px 4px ${theme.palette.custom.cyan})`,
    // transform: 'skewY(5deg)',
  },
  text: {
    marginTop: '2rem',
    lineHeight: 2,
    fontWeight: 400,
    textAlign: 'center',
    color: theme.palette.custom.textColor
  }
}))
const MissionCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.image} alt='icon' />
      </div>
      <div className={classes.text}>
        {props.children}
      </div>
    </div>
  );
};

export default React.memo(MissionCard);