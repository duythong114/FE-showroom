import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles/App.scss';
// eslint-disable-next-line
import Nav from './components/Navbar/Nav'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import User from './components/User/User'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>

        {/* <Nav /> */}

        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/car">
            Car
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

      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </Fragment>
  );
}

export default App;