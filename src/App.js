import React from 'react';
import { ThemeProvider } from '@material-ui/core';
// import { BrowserRouter as Router} from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { darkTheme, lightTheme } from './themes';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import SingleProject from './pages/SingleProject';
// import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeContext.themeMode === 'dark' ? darkTheme : lightTheme}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/portfolio/:slug">
              <SingleProject />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Redirect to='/' />
          </Switch>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
