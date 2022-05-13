import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TaskDashboardPage from '../components/TaskDashboardPage';
import AddTaskPage from '../components/AddTaskPage';
import EditTaskPage from '../components/EditTaskPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/dashboard' component={TaskDashboardPage} />
        <PrivateRoute path='/create' component={AddTaskPage} />
        <PrivateRoute path='/edit/:id' component={EditTaskPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
