import React from 'react';
import { Grid, makeStyles, Box } from "@material-ui/core";
import DefaultCard from "../../cards/DefaultCard";
import Heading from "../../UI/Heading";
import aboutImage from '../../../assets/img/aboutme.svg';
import uiUxImage from '../../../assets/img/ui-ux.svg';
import goalImage from '../../../assets/img/final-goal.svg';
import patternImage from '../../../assets/img/pattern2.png';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { scrollTopClick } from './../../helpers/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    // boxShadow: `inset 0px 0px 20px ${theme.palette.custom.boxShadowColor}`,
    padding: theme.spacing(3),
    paddingBottom: 100,
    zIndex: 1,
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage}')`,
      // backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'drop-shadow(0px 0px 1px rgba(255, 255, 255, 1))',
      // backgroundAttachment: 'fixed',
      opacity: .35,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
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
  },
  imageContainer: {
    height: 150,
    width: 105,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    display: 'block',
    filter: `drop-shadow(0px 0px 4px ${theme.palette.custom.cyan})`,
    // transform: 'skewY(5deg)',
  },
  text: {
    margin: '1.5rem 0',
    lineHeight: 2,
    fontWeight: 400,
    textAlign: 'center',
    color: theme.palette.custom.textColor
  }
}));

const Mission = ({ setActiveSection, setRefs }) => {
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
    <div className={classes.bgOverlay}>
      <section className={classes.root} ref={scrollRef}>
        <Box width='100%' padding='30px 0' className='fadeIn'>
          <Heading text='Mission' />
          <Grid container spacing={5} justify='center'>
            <Grid item className={`${classes.gridItem} ${classes.translateMinusXl}`} xs={12} md={6} lg={4}>
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <img className={classes.image} src={aboutImage} alt='icon' />
                </div>
                <div className={classes.text}>
                  This is the place where ideas get converted into code. If you are into any of those two,<br /> let's <Link to='/contact' className='cyan' onClick={scrollTopClick} >get in touch</Link> and build.
                </div>
              </DefaultCard>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <img className={classes.image} src={uiUxImage} alt='icon' />
                </div>
                <div className={classes.text}>
                  To attract and retain user attention, there is a need for catchy UI and smooth UX, which will lead to engagement and interaction.
                </div>
              </DefaultCard>
            </Grid>
            <Grid item className={`${classes.gridItem} ${classes.translatePlusXl}`} xs={12} md={6} lg={4}>
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <img className={classes.image} src={goalImage} alt='icon' />
                </div>
                <div className={classes.text}>
                  The mission here is to create performant, modern, user friendly web applications, with the latest technologies, and to make sure they achieve the desired effect.
                </div>
              </DefaultCard>
            </Grid>
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default React.memo(Mission);