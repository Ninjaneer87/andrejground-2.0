import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Heading from '../../UI/Heading';
import ValuesTabs from './ValuesTabs';
import ValuesTabsMobile from './ValuesTabsMobile';

const values = [
  {
    title: 'Be Resourceful',
    content: <>
      We go beyond the surface to gain a deep understanding of every issue
      <br /><br />
      We always find a way to get things done with what’s available, but we are not shy about asking for help when it’s needed
      <br /><br />
      We believe that great ideas can come from anywhere, regardless of seniority and experience
    </>,
  },
  {
    title: 'Stay Determined',
    content: <>
      We never give up, carry each other through hard times, and recognise grit in our colleagues
      <br /><br />
      We understand that building a world-changing company is a monumental task, but we love every minute of it
      <br /><br />
      We celebrate milestones together, recharge, and get back to work
    </>,
  },
  {
    title: 'Dream Big',
    content: <>
      We think big, take smart risks, and do things that have never been done before
      <br /><br />
      We are not afraid to make tough choices that align with our long-term objectives
      <br /><br />
      We know that it always seems impossible until it’s done
    </>,
  },
  {
    title: 'Take Ownership and Be Decisive',
    content: <>
      We are all empowered to take initiative, make the right decisions, and act as owners
      <br /><br />
      We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with
      <br /><br />
      We aim to surprise and inspire with the quality and speed of our decision-making
    </>,
  },
  {
    title: 'Remain Humble',
    content: <>
      We don’t seek the limelight and focus on doing what is best for the company and the users
      <br /><br />
      We leave our egos at the door and learn from our mistakes, knowing that we are always stronger as a team
      <br /><br />
      We think twice before spending, but are aggressive when it comes to investing in what matters
    </>,
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    minHeight: '70vh',
    paddingBottom: 40
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500
  },
  text: {
    color: theme.palette.custom.textColor,
    textAlign: 'justify',
    padding: 10,
    fontWeight: 500
  },
}));

const Values = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={`${classes.root} fadeIn`}>
      <Heading text="Values & philosophy" />
      <ValuesTabs values={values} />
      <ValuesTabsMobile values={values} />
    </Container>
  );
};

export default Values;