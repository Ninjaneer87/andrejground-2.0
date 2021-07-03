import { makeStyles } from "@material-ui/core";
import MyAppBar from './MyAppBar';
import MyDrawer from './MyDrawer';


const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex'
  },
  page: {
    paddingBottom: theme.spacing(3),
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyAppBar />
      <MyDrawer />
      <div className={classes.page}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;