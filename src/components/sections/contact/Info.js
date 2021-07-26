import React, { useRef } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Avatar, Container, Grid, makeStyles } from '@material-ui/core';
import DefaultCard from '../../cards/DefaultCard';
import ThemedTypography from './../../UI/ThemedTypography';
import Heading from '../../UI/Heading';
import ClipboardCopy from '../../UI/ClipboardCopy';

const infoItems = [
  {
    id: 0,
    label: 'Located at',
    text: 'Serbia',
    icon: <LocationOnOutlinedIcon fontSize='large' />
  },
  {
    id: 1,
    label: 'Email',
    text: 'contact@andrejground.com',
    icon: <MailOutlineIcon fontSize='large' />
  },
  {
    id: 2,
    label: 'Current status',
    text: 'Available',
    icon: <CheckCircleOutlineOutlinedIcon fontSize='large' />
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 50,
  },
  itemContent: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '200px',
  },
  avatar: {
    padding: 30,
    marginBottom: 30,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.custom.accent}`,
    color: theme.palette.custom.accent
  }
}))
const Info = () => {
  const classes = useStyles();
  const emailRef = useRef(null)

  return (
    <Container maxWidth='lg' className={`${classes.root} fadeIn`}>
      <Heading text="Let's connect" />
      <Grid container alignItems='center' justify='center' spacing={5}>
        {infoItems.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <DefaultCard height='100%'>
              <div className={classes.itemContent}>
                <ThemedTypography style={{ marginBottom: 40, fontWeight: 400 }} variant='h6'>{item.label}</ThemedTypography>
                <Avatar className={classes.avatar}>{item.icon}</Avatar>
                <ThemedTypography
                  ref={item.label === 'Email' ? emailRef : null}
                  style={{ fontWeight: 400 }}
                >
                  {item.text}
                  {item.label === 'Email' && <ClipboardCopy ref={emailRef} content={item.text} />}
                </ThemedTypography>
              </div>
            </DefaultCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Info;