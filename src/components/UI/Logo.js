import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import NavContext from '../../context/navContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    textDecoration: 'none',
    alignItems: 'center'
  },
  logoImg: {
    width: '3rem',
    display: 'block'
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.custom.cyan,
      marginLeft: 3,
      display: 'block'
    }
  }
}));

const Logo = (props) => {
  const classes = useStyles();
  const navContext = useContext(NavContext)

  return (
    <Link to='/' className={classes.root} onClick={() => navContext.setExpanded(false)}>
      <img className={classes.logoImg} src={logoImg} alt='logo' />
      {props.header && <Typography className={classes.logoText}>
        Andrej<Box component='span' color='#fff'>Ground</Box>
      </Typography>}
    </Link>
  );
};

export default Logo;