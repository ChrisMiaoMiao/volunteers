import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/css/header.css'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './pages/About'
import Speakers from './pages/Speakers'
import Home from './pages/Home'
import Talks from './pages/Talks'
import SpeakersDetail from './pages/SpeakersDetail'
import TalkDetail from './pages/TalkDetail'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/current-speakers">
        <Speakers />
      </Route>
      <Route path="/talks">
        <Talks/>
      </Route>
      <Route path="/speakers/:id">
        <SpeakersDetail />
      </Route>
      <Route path="/talk/:id">
        <TalkDetail />
      </Route>
    </Switch>
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
