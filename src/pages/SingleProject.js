import React, { useEffect, useState } from 'react';
import Starfall from "../components/UI/Starfall";
import PageTitle from "../components/UI/PageTitle";
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core';
import SingleProjectContent from '../components/sections/portfolio/SingleProjectContent';
import { useRouteMatch } from 'react-router';
import { fetchProject } from '../apiCalls';
import LoadingBar from '../components/UI/LoadingBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
}))

const SingleProject = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const { slug } = match.params;

  useEffect(() => {
    fetchProject(slug, setProject, setLoading);
  }, [slug])

  return (
    <div className={classes.root}>
      {loading && <LoadingBar />}
      <Starfall />
      <PageTitle pageTitle='Project' />
      <SingleProjectContent {...project} />
      <Footer />
    </div>
  );
};

export default React.memo(SingleProject);