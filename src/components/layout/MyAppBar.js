import React from 'react';
import { AppBar, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Logo from "../UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink, useLocation } from "react-router-dom";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import NavContext, { menuItems } from "../../context/navContext";
import { useContext } from "react";
import { grey } from "@material-ui/core/colors";
import ThemeContext from "../../context/themeContext";

const useStyles = makeStyles(theme => ({
  appBar: ({isScrolled}) => {
    const styles = {
      transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
      height: 90,
      flexFlow: 'row',
      justifyContent: 'space-between',
      color: theme.palette.custom.textColor,
      alignItems: 'center',
      background: 'transparent',
      borderBottom: `1px solid transparent`,
      left: 0,
      right: 0,
      width: '100vw',
      zIndex: 5,
      boxSizing: 'border-box',
      [theme.breakpoints.up(1400)]: {
        paddingRight: theme.spacing(10)
      }
    }
    const scrolled = {
      color: theme.palette.custom.textColor,
      height: 60,
      borderBottom: `1px solid ${theme.palette.custom.appbarBorderColor}`,
      background: grey[900],
      boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.38)`,
    }
    return isScrolled ? { ...styles, ...scrolled } : styles;
  },
  logo: {
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    transform: ({isScrolled}) => isScrolled ? 'translateX(30%)' : 'translateX(60%)',
    width: 'fit-content'
  },
  navbar: {
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'row',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600)]: {
      marginRight: theme.spacing(5),
    },
  },
  listItem: ({isScrolled}) => {
    const styles = {
      width: 'fit-content',
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
      color: '#fff',
      '&:hover': {
        color: theme.palette.custom.accent,
        backgroundColor: 'unset'
      }
    }
    const scrolled = {
      // color: theme.palette.custom.textColor,
    }
    return isScrolled ? { ...styles, ...scrolled } : styles;
  },
  active: {
    color: `${theme.palette.custom.accent} !important`
  },
  navIcon: {
    color: '#fff',
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
      // backgroundColor: 'unset'
    }
  }
}));


const MyAppBar = (props) => {
  const navContext = useContext(NavContext);
  const themeContext = useContext(ThemeContext);
  const location = useLocation();

  const { ref: toolbarScrollRef, inView: toolbarInView } = useInView({
    threshold: 1
  });
  const isScrolled = !toolbarInView;

  const classes = useStyles({isScrolled});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <div ref={toolbarScrollRef}>
        <div />
      </div>
      <AppBar className={classes.appBar} elevation={0}>
        <div className={classes.logo}>
          <Logo header />
        </div>
        <List
          component='nav'
          className={classes.navbar}
        >
          {isSmallScreen ?
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={navContext.toggleExpanded}
            >
              <MenuIcon fontSize='large' className={classes.navIcon} />
            </IconButton> :
            menuItems.map(item =>
              <ListItem
                key={item.id}
                className={`${location.pathname === item.path ? classes.active : ''} ${classes.listItem}`}
                // button
                component={NavLink}
                to={item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>)
          }
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={themeContext.toggleTheme}
          >
            {
              themeContext.themeMode === 'dark' ?
                <Brightness2Icon className={classes.navIcon} /> :
                <WbSunnyIcon className={classes.navIcon} />
            }
          </IconButton>
        </List>
      </AppBar>
    </div>
  );
};

export default React.memo(MyAppBar);