import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Redirect, Link, browserHistory, hashHistory, useRouterHistory} from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';

import Layout from './components/layout.jsx';
import Users from './components/users.jsx';
import Companies from './components/companies.jsx';
import Error404 from './components/error404.jsx';
import Home from './components/home.jsx';

import '../css/main.css';

import 'bootstrap-webpack';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const Root = () => <Router history={appHistory}>
                        <Route component={Layout}>
                          <Route path="/" component={Home} />
                          <Route path="users" component={Users} />
                          <Route path="companies" component={Companies} />
                          <Route path='*' component={Error404} />
                        </Route>
                      </Router>;

render(<Root />, document.querySelector('#content'));
