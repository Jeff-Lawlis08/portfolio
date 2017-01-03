import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import App from './components/App';
import Home from './components/Home';
import Resume from './components/Resume';
import ProjectPage from './components/ProjectPage';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/project/:project' component={ProjectPage}/>
    </Route>
  </Router>
);

export default router;
