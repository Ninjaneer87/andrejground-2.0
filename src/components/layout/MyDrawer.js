import { Divider, Drawer, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext, { menuItems } from "../../context/navContext";
import Logo from "../UI/Logo";
import { cyan } from "@material-ui/core/colors";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: theme.palette.custom.darkBlue,
    color: '#fff',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.custom.darkBlue,
  },
  listItem: {
    transformOrigin: 'center center',
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      width: 2,
      transition: 'transform 250ms ease',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#fff',
      transform: 'scaleY(0)',
    }
  },
  active: {
    color: theme.palette.custom.cyan,
    '&::before': {
      transform: 'scaleY(1)',
    }
  },
  title: {
    padding: theme.spacing(2),
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    boxSizing: 'border-box'
  },
  divider: {
    backgroundColor: cyan[900]
  },
  badge: {
    left: '100%',
    top: '50%'
  }
}));

const MyDrawer = ({ unseenOrdersCount }) => {
  const classes = useStyles();
  const location = useLocation();

  const navContext = useContext(NavContext);

  const drawerHeader = <div>
    <Typography
      variant='h6'
      className={classes.title}
    >
      <Logo />
    </Typography>
    <Divider classes={{ root: classes.divider }} />
  </div>;

  const list = (
    <div className={classes.drawer}>
      <List disablePadding>
        {menuItems.map(item => (
          <ListItem
            key={item.id}
            button
            component={Link}
            to={item.path}
            className={`${location.pathname === item.path ? classes.active : ''} ${classes.listItem}`}
            onClick={() => navContext.setExpanded(false)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const drawer = <Drawer
    anchor='left'
    open={navContext.isExpanded}
    onClose={() => navContext.setExpanded(false)}
    classes={{ paper: classes.drawerPaper }}
  >
    {drawerHeader}
    {list}
  </Drawer>;

  console.log(navContext.isExpanded)
  return (
    <div>
      {drawer}
    </div>
  );
};


export default MyDrawer;
