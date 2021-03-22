import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import './app.css';

function App() {
  return (
    <div className="fullHeight">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
