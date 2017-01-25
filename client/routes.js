import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Landing} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='services' component={Services} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
