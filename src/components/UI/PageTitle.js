import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import { Parallax } from 'react-parallax';
import heroImage from '../../assets/img/bg.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'start',
    alignItems: 'flex-end',
    minHeight: '25vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      // backgroundAttachment: 'fixed',
      // transform: 'scale(1.3)',
      // opacity: .2,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      // transform: 'scaleX(-1)'
      [theme.breakpoints.up(992)]: {
        transform: 'scale(1.2)',
        backgroundAttachment: 'fixed',
      },
    }
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
    // <Parallax
    //   blur={1}
    //   bgImage={heroImage}
    //   bgImageAlt="tech"
    //   strength={300}
    //   bgImageStyle={{ top: '-130px' }}
    // >
      <div className={classes.root}>
          <Typography component='h1' variant='h2' className={`${classes.pageTitle} fadeIn`}>
            {props.pageTitle}
          </Typography>
      </div>
    // </Parallax>
  );
};

export default React.memo(PageTitle);