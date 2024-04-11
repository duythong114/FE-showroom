import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles/App.scss';
import Nav from './components/Navbar/Nav'
import AppRoutes from './routes/AppRoutes';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {

  return (
    <Fragment>
      <Router>
        <div className='nav-container'>
          <Nav />
        </div>

        <div className='app-container'>
          <AppRoutes />
        </div>
      </Router>

      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={2000}
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