import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { darkTheme, lightTheme } from './themes';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';

function App() {
  const themeContext = useContext(ThemeContext);
  
  return (
    <ThemeProvider theme={themeContext.themeMode === 'dark' ? darkTheme : lightTheme}>
      <Router>
        <Layout>
          {/* <Paper> */}
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
          {/* </Paper> */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
