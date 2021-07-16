import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  starfall: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    background: theme.palette.custom.backgroundColor,
    transition: `background ${theme.transitions.duration.short}ms ease`,
  },
  lines: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    margin: 'auto',
    width: '100vw',
    opacity: 0.5
  },
  line: {
    position: 'absolute',
    width: '1px',
    height: '100%',
    top: 0,
    left: '50%',
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '15vh',
      width: '100%',
      transition: `transform ${theme.transitions.duration.short}ms ease`,
      top: '-50%',
      left: 0,
      background: `linear-gradient(to bottom, transparent 0%, #00e5ffad 75%, ${theme.palette.custom.textColor} 100%)`,
      animation: 'drop 7s 0s infinite',
      animationFillMode: 'forwards',
      animationTimingFunction: 'cubic-bezier(0.4, 0.26, 0, 0.97)',
      animationDelay: 'var(--delay)',
      '-webkit-animation-delay': 'var(--delay)'
    },
  }
}));

// const stars = [
//   {
//     animationDelay: '3s',
//     leftMargin: '-45%'
//   },
//   {
//     animationDelay: '5s',
//     leftMargin: '-30%'
//   },
//   {
//     animationDelay: '0s',
//     leftMargin: '-15%'
//   },
//   {
//     animationDelay: '2s',
//     leftMargin: '0'
//   },
//   {
//     animationDelay: '1s',
//     leftMargin: '15%'
//   },
//   {
//     animationDelay: '4s',
//     leftMargin: '30%'
//   },
//   {
//     animationDelay: '6s',
//     leftMargin: '45%'
//   },
// ];

const Starfall = () => {
  const classes = useStyles();

  return (
    <div className={classes.starfall}>
      {/* <div className={classes.lines}>
        {stars.map(star =>
          <div
            key={star.leftMargin}
            className={classes.line}
            style={{
              marginLeft: star.leftMargin,
              '--delay': star.animationDelay
            }}
          />)}
      </div> */}
    </div>
  );
};
export default React.memo(Starfall);