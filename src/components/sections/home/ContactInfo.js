import React from 'react';
import { makeStyles, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Button } from '@material-ui/core';
import bgImage from '../../../assets/img/bg4.jpg';
// import { Parallax } from 'react-parallax';
import Heading from './../../UI/Heading';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    overflow: 'hidden',
    [theme.breakpoints.up(600)]: {
      padding: theme.spacing(3),
    },
    '&::after': {
      content: '""',
      backgroundImage: `url('${bgImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundAttachment: 'fixed',
      transform: 'scale(1.2)',
      // opacity: .2,
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
    marginBottom: '1em',
  },
  icon: {
    color: '#fff',
    padding: 10,
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: '100vh',
    border: `1px solid ${theme.palette.custom.accent}`,
    [theme.breakpoints.up(450)]: {
      marginRight: 20,
    },
    [theme.breakpoints.up(600)]: {
      width: 40,
      height: 40,
      padding: 20,
      marginRight: 30,
    },
    [theme.breakpoints.up(960)]: {
      marginRight: 50,
    },
  },
  socialIcon: {
    width: 50,
    height: 50,
    padding: '20px',
    color: '#fff',
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
    }
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
  emailLink: {
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
    }
  }
}));

const ContactInfo = ({setActiveSection, setRefs}) => {
  const classes = useStyles();

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (scrollInView)
      setActiveSection('contact');
  }, [scrollInView, setActiveSection])
  
  useEffect(() => {
    if (entry)
      setRefs('contact', entry.target)
  }, [entry, setRefs])

  const socials = [
    {
      link: 'https://twitter.com/nindzenjer',
      icon: <TwitterIcon className={classes.socialIcon} />
    },
    {
      link: 'https://www.linkedin.com/in/andrejforgac87/',
      icon: <LinkedInIcon className={classes.socialIcon} />
    },
    {
      link: 'https://github.com/Ninjaneer87',
      icon: <GitHubIcon className={classes.socialIcon} />
    },
  ];

  return (
    // <Parallax
    //   blur={1}
    //   bgImage={bgImage}
    //   bgImageAlt="tech"
    //   strength={300}
    //   bgImageStyle={{ top: '-130px' }}
    // >
      <section className={classes.root} ref={scrollRef}>
        <Box maxWidth='90vw' width={450} padding='30px 0' margin='0 auto' className='fadeIn'>
          <Heading text="Contact Info" inverse />
          <List>
            <ListItem disableGutters style={{ marginBottom: 20 }}>
              <ListItemIcon>
                <LocationOnOutlinedIcon classes={{ root: classes.icon }} fontSize='large' />
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 200, marginBottom: 10 }} className='white' variant='h4'>
                  Town, State
                </Typography>
                <Typography className='white' style={{ fontWeight: 400 }}>
                  Apatin, Serbia
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <MailOutlineIcon classes={{ root: classes.icon }} fontSize='large' />
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 200, marginBottom: 10 }} className='white' variant='h4'>
                  Email
                </Typography>
                <Typography
                  component='a'
                  href='mailto:contact@andrejground.com'
                  className={`white ${classes.emailLink}`}
                  style={{ fontWeight: 400 }}
                >
                  contact@andrejground.com
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Divider classes={{ root: classes.divider }} />
          <Box display='flex' justifyContent='center'>
            {socials.map(social =>
              <IconButton
                key={social.link}
                edge="start"
                aria-label="social"
                component='a'
                href={social.link}
                target='_blank'
                rel="noopener noreferrer"
              >
                {social.icon}
              </IconButton>
            )}
          </Box>
          <Button
            fullWidth
            variant='outlined'
            color='secondary'
            // style={{ marginBottom: '20px', maxWidth: '500px' }}
            component={Link}
            to='/contact'
            endIcon={<SendOutlinedIcon />}
          >
            Send a message
          </Button>
        </Box>
      </section>
    // </Parallax>
  );
};

export default React.memo(ContactInfo);