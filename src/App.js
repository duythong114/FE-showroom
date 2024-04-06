import React from 'react';
import './styles/App.scss';
// eslint-disable-next-line
import Nav from './components/Navbar/Nav'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Nav /> */}

        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/new">
            New
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            404 NOT FOUND
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;