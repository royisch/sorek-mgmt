import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , browserHistory} from 'react-router'
import { createHistory, useBasename } from 'history'
import MainView from './containers/MainView'
//import LoginView from './containers/LoginView'
import NavView from './components/NavView'

render((
  <Router history={browserHistory}>
    <Route path="/" component={MainView}>
      <Route path="/listDocs" component={MainView}/>
    </Route>
  </Router>
), document.getElementsByClassName('main')[0]);

