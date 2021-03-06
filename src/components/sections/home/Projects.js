import { makeStyles, Box, Grid, Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, { useContext } from 'react';
import patternImage from '../../../assets/img/pattern2.png';
import bgImage from '../../../assets/img/coinland-framed.png';
import Heading from "../../UI/Heading";
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ThemeContext from '../../../context/themeContext';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import DefaultCard from '../../cards/DefaultCard';
import { scrollTopClick } from '../../helpers/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    // boxShadow: `inset 0px 0px 20px ${theme.palette.custom.boxShadowColor}`,
    padding: theme.spacing(3),
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage}')`,
      backgroundPosition: 'center',
      filter: 'drop-shadow(0px 0px 1px rgba(255, 255, 255, 1))',
      opacity: .35,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1,
    },
  },
  gridItem: {
    marginBottom: '3em',
  },
  image: {
    backgroundImage: `url('${bgImage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    height: 600,
    maxHeight: '90vw',
    filter: `drop-shadow(0px 20px 20px #0000004e)`,
  },
  contentHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: theme.palette.custom.textColor,
    fontWeight: 400,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: 'fit-content',
    minWidth: 200,
    margin: '0 auto',
    position: 'relative',
    marginBottom: '20px',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      maxWidth: '100%',
      height: '2px',
      backgroundColor: theme.palette.custom.accent
    }
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
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
  text: {
    color: theme.palette.custom.textColor,
    margin: '20px 0',
    textAlign: 'start',
    lineHeight: 1.7
  },
}));

const Projects = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();
  const themeContext = useContext(ThemeContext);

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (scrollInView)
      setActiveSection('projects');
  }, [scrollInView, setActiveSection])

  useEffect(() => {
    if (entry)
      setRefs('projects', entry.target)
  }, [entry, setRefs])

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.root} ref={scrollRef}>
        <Box width='100%' padding='30px 0' className='fadeIn'>
          <Heading text="Projects" />
          <Grid container spacing={5} justify='flex-end'>
            <Grid item xs={12} md={6} className={classes.contentHolder}>
              <DefaultCard
                maxWidth={600}
                height='fit-content'
              >
                <Typography component='h3' variant='h5' className={classes.subtitle}>
                  COINLAND
                </Typography>
                <Typography className={classes.text}>
                  This practice project was intended to connect custom built client side app to an external API. All the data comes from <a target="_blank" rel="noopener noreferrer" href='https://coinmarketcap.com/' className='cyan'>coinmarketcap.com</a>.
                  <br />
                  <br />
                  <small>* AndrejGround's first ever project</small>
                </Typography>
                <ButtonGroup
                  aria-label="outlined primary button group"
                  fullWidth
                >
                  <Button
                    variant='text'
                    component='a'
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://ninjaneer87.github.io/coinland/'
                    endIcon={<LinkIcon />}
                    color={`${themeContext.themeMode === 'dark' ? 'secondary' : 'primary'}`}
                  >
                    Live site
                  </Button>
                  <Button
                    variant='text'
                    component='a'
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://github.com/Ninjaneer87/coinland/'
                    endIcon={<CodeIcon />}
                    color={`${themeContext.themeMode === 'dark' ? 'secondary' : 'primary'}`}
                  >
                    Code
                  </Button>
                </ButtonGroup>

                <Divider classes={{ root: classes.divider }} />

                <Button
                  variant='text'
                  fullWidth
                  size="large"
                  color={`${themeContext.themeMode === 'dark' ? 'secondary' : 'primary'}`}
                  endIcon={<ArrowRightAltIcon />}
                  component={Link}
                  to='/portfolio'
                  onClick={scrollTopClick}
                >
                  More projects
                </Button>
              </DefaultCard>
            </Grid>
            <Grid item xs={12} md={6} >
              <div className={classes.image} />
            </Grid>
          </Grid>
        </Box>

      </section>
    </div>
  );
};

export default React.memo(Projects);