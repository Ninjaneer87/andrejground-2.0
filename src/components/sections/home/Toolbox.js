import React from 'react';
import bgImage from '../../../assets/img/bg2.jpg';
import toolboxImage from '../../../assets/img/skills1.png';
import { Grid, makeStyles, Box } from "@material-ui/core";
// import { Parallax } from 'react-parallax';
import Heading from "../../UI/Heading";
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
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
    padding: theme.spacing(3),
    overflow: 'hidden',
    zIndex: 1,
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${bgImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      [theme.breakpoints.up(992)]: {
        transform: 'scale(1.2)',
        backgroundAttachment: 'fixed',
      },
    },
  },
  gridItem: {
    marginBottom: '1em',
  },
  toolboxItem: {
    maxWidth: 600,
    margin: '0 auto',
    fontWeight: 400,
    fontSize: '1.2rem',
    // padding: '2rem 0',
    borderRadius: '2rem',
    color: '#fff',
    [theme.breakpoints.up(600)]: {
      padding: '2rem 1rem',
      fontSize: '1.4rem',
    },
    '& span': {
      fontWeight: 400,
      fontSize: '1.05rem',
      [theme.breakpoints.up(600)]: {
        fontSize: '1.3rem',
      },
    },
    '& svg': {
      color: '#fff',
    }
  },
  toolboxImageHolder: {
    width: '90vw',
    maxWidth: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: `drop-shadow(30px 10px 4px #0000005e)`,
    // animation: 'rotate 24s linear infinite',
  },
  toolboxImage: {
    width: '90vw',
    maxWidth: 400,
    filter: 'brightness(.8)',
  },
  listItem: {
    margin: '20px 0',
    color: '#fff',
    [theme.breakpoints.up(600)]: {
      paddingLeft: 50,
    },
  },
  moreTools: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25
  },
  moreToolsItem: {
    width: 'fit-content',
    fontSize: '1rem',
    margin: '5px',
    borderRadius: 6,
    border: `1px solid ${theme.palette.custom.accent}`,
    color: '#fff',
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

const moreTools = [
  'React',
  'Redux',
  'Redux Saga',
  'Material UI',
  'Node JS',
  'MongoDB',
  'PHP',
  'MySQL',
  'Git',
  'Webpack',
  'Axios',
]

const Toolbox = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (entry)
      setRefs('toolbox', entry.target)
  }, [entry, setRefs])


  useEffect(() => {
    if (scrollInView)
      setActiveSection('toolbox');
  }, [scrollInView, setActiveSection]);

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.root} ref={scrollRef}>
        <Box width='100%' padding='30px 0' className='fadeIn'>
          <Heading text="Toolbox" inverse />
          <Grid container justify='center' spacing={5}>

            <Grid item xs={12} md={6} className={classes.gridItem}>
              <div className={classes.toolboxItem} style={{ maxWidth: 400 }}>
                Main tools:
                <List>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <i className="fab fa-js-square fa-2x"></i>
                    </ListItemIcon>
                    <ListItemText>
                      JavaScript (ES5, ES6+)
                    </ListItemText>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <i className="fab fa-html5 fa-2x"></i>
                    </ListItemIcon>
                    <ListItemText>
                      HTML
                    </ListItemText>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <i className="fab fa-css3-alt fa-2x"></i>
                    </ListItemIcon>
                    <ListItemText>
                      CSS
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className={classes.toolboxImageHolder} >
                <img src={toolboxImage} alt='toolbox' className={classes.toolboxImage} />
              </div>
            </Grid>

            <Grid item xs={12} md={6} className={classes.gridItem}>
              <div className={classes.toolboxItem}>
                Catching up - tools & helpers:
                <List className={classes.moreTools}>
                  {moreTools.map(tool =>
                    <ListItem key={tool} className={classes.moreToolsItem}>
                      {tool}
                    </ListItem>)}
                </List>
              </div>
            </Grid>

          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default React.memo(Toolbox);