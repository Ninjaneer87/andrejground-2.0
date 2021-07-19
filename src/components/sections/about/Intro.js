import React from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Heading from '../../UI/Heading';
import logoImg from '../../../assets/img/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500
  },
  logoImage: {
    backgroundImage: `url(${logoImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 100,
    height: 100,
    padding: 30,
    margin: '80px 0',
    boxSizing: 'border-box',
    borderRadius: '100vh',
    position: 'relative',
    filter: 'drop-shadow(0px 0px 5px #000)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -40,
      bottom: -40,
      left: -40,
      right: -40,
      borderLeft: `2px solid ${theme.palette.custom.accent}`,
      borderRight: `2px solid #fff`,
      borderRadius: '100vh',
    }
  }
}));

const Intro = () => {
  const classes = useStyles();

  return (
      <Container maxWidth='xl' className={`${classes.root} fadeIn`}>
        <Heading text="What is AndrejGround?" />
        <Typography variant='h6' className={classes.subTitle}>
          AndrejGround is actualy a pseudonim of a junior frontend developer who's looking for an enviroment to grow and build.
        </Typography>
        <Box className={classes.logoImage} />
      </Container>
  );
};

export default Intro;