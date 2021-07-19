import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import NavContext from '../../context/navContext';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    textDecoration: 'none',
    alignItems: 'center',
    padding: '4px',
    borderRadius: 6,
    height: '3rem',
    boxSizing: 'border-box',
  },
  logoImg: {
    width: '3rem',
    display: 'block',
  },
  logoText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      fontWeight: theme.typography.fontWeightLight,
      color: '#fff',
      marginLeft: 3,
      display: 'block',
    }
  }
}));

const Logo = (props) => {
  const classes = useStyles();
  const navContext = useContext(NavContext)
  const { pathname } = useLocation();

  const logoHandler = () => {
    navContext.setExpanded(false);
    pathname === '/' ? document.body.scrollIntoView({behavior: 'smooth'}) : window.scrollTo(0, 0);
  }

  return (
    <ButtonBase style={{borderRadius: 16, color: "#000"}}>
      <Link to='/' className={classes.root} onClick={logoHandler}>
        <img className={classes.logoImg} src={logoImg} alt='logo' />
        {props.header && <Typography className={classes.logoText}>
          <span className='cyan'>Andrej</span>Ground
        </Typography>}
      </Link>
    </ButtonBase>
  );
};

export default React.memo(Logo);