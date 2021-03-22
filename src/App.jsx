import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import './app.css';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <div className="fullHeight">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;