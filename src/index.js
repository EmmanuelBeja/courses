/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { Router, browserHistory } from "react-router";
import {loadCourses} from './actions/course/courseActions';
import {loadAuthors} from './actions/authors/authorActions';
import configureStore from "./store/configureStore";
import routes from "./routes";
import './assets/css/styles.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
