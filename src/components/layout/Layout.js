import React from 'react';
import { makeStyles } from "@material-ui/core";
import MyAppBar from './MyAppBar';
import MyDrawer from './MyDrawer';
import MyLoader from './../UI/MyLoader';
import ScrollTop from './../UI/ScrollTop';


const useStyles = makeStyles(theme => ({
  root: {
  },
  page: {
    // display: 'flex',
    // flexFlow: 'column',
    // paddingBottom: theme.spacing(3),
    '-ms-transform': 'translate3d(0, 0, 0)',
    '-webkit-transform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
    // minHeight: '100vh',
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyLoader />
      <MyAppBar />
      <MyDrawer />
      <div className={classes.page}>
        {props.children}
      </div>
      <ScrollTop />
    </div>
  );
};

export default Layout;