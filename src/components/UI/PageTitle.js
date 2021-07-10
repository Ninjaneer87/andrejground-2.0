import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Parallax } from 'react-parallax';
import heroImage from '../../assets/img/bg.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'start',
    alignItems: 'flex-end',
    minHeight: '30vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  pageTitle: {
    color: '#fff',
    fontSize: '2rem',
    padding: '1rem',
    [theme.breakpoints.up(960)]: {
      fontSize: '2.5rem',
      padding: '2rem',
    },
    [theme.breakpoints.up(1400)]: {
      fontSize: '3rem',
      padding: '3rem',
    }
  }
}));

const PageTitle = (props) => {
  const classes = useStyles();
  return (
    <Parallax
      blur={1}
      bgImage={heroImage}
      bgImageAlt="tech"
      strength={300}
      bgImageStyle={{ top: '-130px' }}
    >
      <div className={classes.root}>
          <Typography component='h1' variant='h2' className={`${classes.pageTitle} fadeIn`}>
            {props.pageTitle}
          </Typography>
      </div>
    </Parallax>
  );
};

export default PageTitle;