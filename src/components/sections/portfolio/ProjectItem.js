import React, { useContext } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import DefaultCard from '../../cards/DefaultCard';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ThemeContext from '../../../context/themeContext';

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: ({ image }) => `url('${image}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: '20px 0',
    minHeight: 300,
    width: '100%',
    maxHeight: '90vw',
    filter: `drop-shadow(0px 20px 20px #0000004e)`,
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


const ProjectItem = ({ image, title, liveLink, codeLink, id }) => {
  console.log(typeof image)
  const classes = useStyles({ image });
  const themeContext = useContext(ThemeContext);
  return (
    <DefaultCard
      // maxWidth={600}
      width='90%'
      height='fit-content'
    >
      <Typography component='h3' variant='h5' className={classes.subtitle}>
        {title}
      </Typography>
      <div className={classes.image} />
      <ButtonGroup
        aria-label="outlined primary button group"
        fullWidth
      >
        <Button
          variant='text'
          component='a'
          target='_blank'
          rel="noopener noreferrer"
          href={liveLink}
          disabled={!liveLink}
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
            href={codeLink}
            disabled={!codeLink}
            endIcon={<CodeIcon />}
            color={`${themeContext.themeMode === 'dark' ? 'secondary' : 'primary'}`}
          >
            Code {codeLink === '' && 'N/A'}
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
        to={`/portfolio/${id}`}
      >
        More details
      </Button>
    </DefaultCard>
  );
};

export default ProjectItem;