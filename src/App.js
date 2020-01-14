import React from 'react';
import Login from './login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ForgotPassword from './login/ForgotPassword';
import ResetPassword from './login/ResetPassword';
import Register from './login/Register';
import axios from 'axios';
import Users from './user/Users';
import Home from './dashboard/Home';
import Posts from './blogs/Posts';

function App() {
  axios.defaults.baseURL = 'http://localhost:8000/';
  axios.defaults.headers.common = { 'Authorization': localStorage.getItem('_token') }
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/register" component={Register} />
        <Route path='/admin' exact component={Home} />
        
        <Route path='/admin/users' component={Users} />
        <Route path='/admin/posts' component={Posts} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </Router>

  );
}

export default App;
