import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

const Notfound = () => (<h1>Not found</h1>);
const rootEl = document.getElementById('root');
const appRouter = (
  <Router>
    <Route exact path="/" component={App} />
  </Router>
);

ReactDOM.render(
  appRouter,
  rootEl,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
