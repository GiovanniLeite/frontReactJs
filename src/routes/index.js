import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute exact path="/home" component={Home} isClosed={false} />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
