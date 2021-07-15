import React from 'react';
import { Grid, makeStyles, Box } from "@material-ui/core";
import MissionCard from "../../cards/MissionCard";
import Heading from "../../UI/Heading";
import aboutImage from '../../../assets/img/aboutme.svg';
import uiUxImage from '../../../assets/img/ui-ux.svg';
import goalImage from '../../../assets/img/final-goal.svg';
import patternImage from '../../../assets/img/pattern1.png';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    boxShadow: `inset 0px 0px 20px ${theme.palette.custom.boxShadowColor}`,
    padding: theme.spacing(3),
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundAttachment: 'fixed',
      opacity: .2,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      // transform: 'scaleX(-1)'
    }
  },
  gridItem: {
    marginBottom: '3em',
  },
  translateMinusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: 'translateY(-100px)'
    },
  },
  translatePlusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: 'translateY(+100px)'
    },
  }
}));

const Mission = ({setActiveSection, setRefs}) => {
  const classes = useStyles();

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (scrollInView)
      setActiveSection('mission');
  }, [scrollInView, setActiveSection])

  useEffect(() => {
    if (entry)
      setRefs('mission', entry.target)
  }, [entry, setRefs])

  return (
    <section className={classes.root} ref={scrollRef}>
      <Box width='100%' padding='30px 0' className='fadeIn'>
        <Heading text='Mission' />
        <Grid container spacing={5} justify='center'>
          <Grid item className={`${classes.gridItem} ${classes.translateMinusXl}`} xs={12} md={6} lg={4}>
            <MissionCard image={aboutImage}>
              This is the place where ideas get converted into code. If you are into any of those two,<br /> let's <Link to='/contact' className='cyan'>get in touch</Link> and build.
            </MissionCard>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
            <MissionCard image={uiUxImage}>
              Outstanding UI and UX are a must-have in today's age of short attention span on the web <i>(and in general)</i>. If it's not intuitive - before you know it, your app is a ghost town.
              </MissionCard>
          </Grid>
          <Grid item className={`${classes.gridItem} ${classes.translatePlusXl}`} xs={12} md={6} lg={4}>
            <MissionCard image={goalImage}>
              The mission here is to create engaging, user friendly web applications, using the latest technologies, and make sure they achieve the desired effect.
            </MissionCard>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default React.memo(Mission);