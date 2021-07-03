import { AppBar, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";
import Logo from "../UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useLocation } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavContext, { menuItems } from "../../context/navContext";
import { useContext } from "react";

const useStyles = makeStyles(theme => ({
  appBar: isScrolled => {
    const styles = {
      transition: 'all 250ms ease-in-out',
      height: 90,
      flexFlow: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'transparent',
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
      backgroundColor: theme.palette.custom.darkBlue,
      height: 60,
      borderBottom: `1px solid ${cyan[900]}`
    }
    return isScrolled ? { ...styles, ...scrolled } : styles;
  },
  logo: {
    transition: 'transform 250ms ease-in-out',
    transform: isScrolled => isScrolled ? 'translateX(30%)' : 'translateX(60%)',
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
  listItem: {
    width: 'fit-content',
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    transition: 'color 250ms ease-in-out',
    '&:hover': {
      color: theme.palette.custom.cyan
    }
  },
  active: {
    color: theme.palette.custom.cyan
  }
}));


const MyAppBar = (props) => {
  const navContext = useContext(NavContext);
  const location = useLocation();
  const { ref: toolbarScrollRef, inView: toolbarInView } = useInView({
    threshold: 1
  });
  console.log({ toolbarInView });

  const isScrolled = !toolbarInView;
  const classes = useStyles(isScrolled);
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
              <MenuIcon fontSize='large' />
            </IconButton> :
            menuItems.map(item =>
              <ListItem
                key={item.id}
                className={`${location.pathname === item.path ? classes.active : ''} ${classes.listItem}`}
                button
                component={Link}
                to={item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>)
          }
        </List>
      </AppBar>
    </div>
  );
};

export default MyAppBar;