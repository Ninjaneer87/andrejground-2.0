import React from 'react';
import Starfall from "../components/UI/Starfall"
import PageTitle from "../components/UI/PageTitle";
import ProjectsList from '../components/sections/portfolio/ProjectsList';
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  }
}))
const Portfolio = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Starfall />
      <PageTitle pageTitle='Portfolio' />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default React.memo(Portfolio);