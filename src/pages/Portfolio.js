import React, { useContext, useEffect } from 'react';
import Starfall from "../components/UI/Starfall"
import PageTitle from "../components/UI/PageTitle";
import ProjectsList from '../components/sections/portfolio/ProjectsList';
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core';

import LoadingBar from '../components/UI/LoadingBar';
import { ProjectContext } from './../context/projectContext';
import { fetchProjects } from './../apiCalls';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  }
}))
const Portfolio = () => {
  const classes = useStyles();
  const {fetchedProjects, loading, dispatch} = useContext(ProjectContext)

  useEffect(() => {
    fetchProjects(dispatch);
  }, [dispatch])

  return (
    <div className={classes.root}>
      {loading && <LoadingBar />}
      <Starfall />
      <PageTitle pageTitle='Portfolio' />
      <ProjectsList projects={fetchedProjects} />
      <Footer />
    </div>
  );
};

export default React.memo(Portfolio);