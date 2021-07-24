import React from 'react';
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Heading from '../../UI/Heading';
import andrejImage from '../../../assets/img/andrej500transparent.png';
import DefaultCard from '../../cards/DefaultCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    paddingBottom: 40
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500
  },
  image: {
    backgroundImage: `url(${andrejImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 250,
    maxWidth: '80vw',
    height: 250,
    maxHeight: '80vw',
    padding: 30,
    margin: '80px auto',
    boxSizing: 'border-box',
    borderRadius: '100vh',
    position: 'relative',
    filter: 'drop-shadow(0px 0px 5px #00000077)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderLeft: `2px solid ${theme.palette.custom.accent}`,
      borderRight: `2px solid #fff`,
      borderRadius: '100vh',
    }
  },
  text: {
    color: theme.palette.custom.textColor,
    textAlign: 'justify',
    padding: 10,
    fontWeight: 500
  },
  name: {
    // color: 'grey',
    color: theme.palette.custom.textColor,
    textAlign: 'center',
    padding: 0,
    margin: 0,
  }
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={`${classes.root} fadeIn`}>
      <Heading text="Meet Andrej" />
      <DefaultCard width='100%'>
        <Grid container spacing={3} alignItems='center' justify='center'>
          <Grid item xs={12} md={6}>
            <Box className={classes.image} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography  className={classes.text} >
              Andrej has been into front-end development only for a couple of years now. Beside a few projects, he has developed a strong interest in JavaScript and its ecosystem, with a focus on React.js.
              <br /><br />
              He enjoys learning, coding, and seeing his code getting leaner and cleaner after each project.
              <br /><br />
              Now, he is in the quest for finding the right environment for professional growth and improvement.
              <br /><br />
            </Typography>
          </Grid>
        </Grid>
      </DefaultCard>
    </Container>
  );
};

export default AboutMe;