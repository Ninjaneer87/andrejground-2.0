import React from 'react';
import Starfall from "../components/UI/Starfall";
import PageTitle from "../components/UI/PageTitle";
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core';
import SendMessage from './../components/sections/contact/SendMessage';
import patternImage2 from '../assets/img/pattern2.png';
import Info from '../components/sections/contact/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage2}')`,
      backgroundPosition: 'center',
      opacity: .35,
      filter: 'drop-shadow(0px 0px 1px #fff)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1
    },
  },
}))

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgOverlay}>
      <div className={classes.root}>
        <Starfall />
        <PageTitle pageTitle='Contact' />
        <Info />
        <SendMessage />
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Contact);