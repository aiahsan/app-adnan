import React from 'react';
import Home from './screens/index';
import Home1 from './screens/index2';
import Home2 from './screens/index3';
import Home3 from './screens/index4';
import Home4 from './screens/index5';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home1'>
          <Home1 />
        </Route>
        <Route exact path='/home2'>
          <Home2 />
        </Route>
        <Route exact path='/home3'>
          <Home3 />
        </Route>
        <Route exact path='/home4'>
          <Home4 />
        </Route>
      </Switch>
    </Router>
  );
};
