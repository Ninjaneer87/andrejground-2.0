import React from 'react';
import { makeStyles } from "@material-ui/core";
import MyAppBar from './MyAppBar';
import MyDrawer from './MyDrawer';
import Footer from './Footer';
import MyLoader from './../UI/MyLoader';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
  page: {
    // paddingBottom: theme.spacing(3),
    '-ms-transform': 'translate3d(0, 0, 0)',
    '-webkit-transform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
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
      <Footer />
    </div>
  );
};

export default Layout;