import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Forums from './views/forums'
import SignUp from './views/sign-up'
import OurPurpose from './views/our-purpose'
import Page from './views/page'
import Home from './views/home'
import ThankYou from './views/thank-you'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Forums} exact path="/forums" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={OurPurpose} exact path="/our-purpose" />
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={ThankYou} exact path="/thank-you" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
