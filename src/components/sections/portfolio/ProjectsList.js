import React from 'react';
import { makeStyles, Box, Grid } from '@material-ui/core';
import patternImage2 from '../../../assets/img/pattern2.png';
import coinlandImage from '../../../assets/img/coinland-framed.png';
import andrejgroundImage from '../../../assets/img/andrejground1-framed.png';
import infobizImage from '../../../assets/img/infobiz-framed.png';
import infobizAppImage from '../../../assets/img/infobiz-app-framed.png';
import Heading from '../../UI/Heading';
import ProjectItem from './ProjectItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    position: 'relative',
    boxShadow: `inset 0px 0px 20px ${theme.palette.custom.boxShadowColor}`,
    padding: theme.spacing(3),
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage2}')`,
      // backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      // backgroundAttachment: 'fixed',
      opacity: .35,
      filter: 'drop-shadow(0px 0px 1px #fff)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1
    },
  },
  contentHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    marginBottom: '3em',
  },
}));

const projects = [
  {
    id: 0,
    title: 'Coinland',
    liveLink: 'https://ninjaneer87.github.io/coinland/',
    codeLink: 'https://github.com/Ninjaneer87/coinland/',
    image: coinlandImage
  },
  {
    id: 1,
    title: 'AndrejGround v1',
    liveLink: 'https://ninjaneer87.github.io/andrejground/',
    codeLink: 'https://github.com/Ninjaneer87/andrejground/',
    image: andrejgroundImage
  },
  {
    id: 2,
    title: 'Infobiz Website',
    liveLink: 'https://www.infobiz.rs/',
    codeLink: '',
    image: infobizImage
  },
  {
    id: 3,
    title: 'Infobiz App',
    liveLink: 'https://app.infobiz.rs/',
    codeLink: '',
    image: infobizAppImage
  },
]

const ProjectsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.root}>
        <Box width='100%' padding='30px 0' className='fadeIn'>
          {/* <Container maxWidth='xl' className='fadeIn'> */}
          <Heading text="Projects" />
          <Grid container spacing={5} >
            {projects.map(project =>
              <Grid item xs={12} md={6} className={classes.contentHolder} key={project.id}>
                <ProjectItem
                  id={project.id}
                  title={project.title}
                  liveLink={project.liveLink}
                  codeLink={project.codeLink}
                  image={project.image}
                />
              </Grid>)}
          </Grid>
          {/* </Container> */}
        </Box>
      </section>
    </div>
  );
};

export default ProjectsList;