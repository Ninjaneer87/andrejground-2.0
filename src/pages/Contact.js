import React from 'react';
import Starfall from "../components/UI/Starfall";
import PageTitle from "../components/UI/PageTitle";
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  }
}))

const Contact = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Starfall />
      <PageTitle pageTitle='Contact' />
      <Footer />
    </div>
  );
};

export default React.memo(Contact);