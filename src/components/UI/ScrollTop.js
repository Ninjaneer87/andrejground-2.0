import React, { useCallback, useContext } from 'react';
import ReactDom from 'react-dom';
import { IconButton, makeStyles } from '@material-ui/core';
import NavContext from './../../context/navContext';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    transform: 'translateX(200%)',
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    border: `2px solid ${theme.palette.custom.accent}`,
    // backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  show: {
    transform: 'translateX(0)',
  }
}))


const ScrollTop = () => {
  const classes = useStyles();
  const { isScrolled } = useContext(NavContext);

  const scrollToTop = useCallback(() => {
    document.body.scrollIntoView({behavior: 'smooth'})
  }, [])

  return ReactDom.createPortal(
      <IconButton
        edge="start"
        color="secondary"
        aria-label="menu"
        onClick={scrollToTop}
        className={`${classes.root} ${isScrolled && classes.show}`}
      >
        <KeyboardArrowUpIcon className={classes.navIcon} />
      </IconButton>,
    document.getElementById('portal')
  );
};

export default ScrollTop;