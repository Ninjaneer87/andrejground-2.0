import React from 'react';
import { ThemeProvider } from '@material-ui/core';
// import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { darkTheme, lightTheme } from './themes';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
// import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  const themeContext = useContext(ThemeContext);
  
  return (
    <ThemeProvider theme={themeContext.themeMode === 'dark' ? darkTheme : lightTheme}>
      {/* <Router> */}
        {/* <ScrollToTop /> */}
        <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
        </Layout>
      {/* </Router> */}
    </ThemeProvider>
  );
}

export default App;
