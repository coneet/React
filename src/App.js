import React from 'react';
import Login from './login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ForgotPassword from './login/ForgotPassword';
import ResetPassword from './login/ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
      </div>
    </Router>

  );
}

export default App;
