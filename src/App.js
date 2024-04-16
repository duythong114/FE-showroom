import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles/App.scss';
import Nav from './components/Navbar/Nav'
import AppRoutes from './routes/AppRoutes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { getUserRefresh } from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  let dispatch = useDispatch()
  let isRefreshingUser = useSelector(state => state.user.isRefreshingUser)
  let user = useSelector(state => state.user.user)
  // let isAuthenticated = useSelector(state => state.user.isAuthenticated)

  useEffect(() => {
    if (!user) {
      dispatch(getUserRefresh())
    }
    // eslint-disable-next-line
  }, [])

  if (isRefreshingUser) {
    return (
      <div className='spiner-container'>
        < PacmanLoader
          size={80}
          loading={true}
          color="#36d7b7" />
        <h1 className='spiner-text mt-3'>Data is loading...</h1>
      </div >
    )
  } else {
    return (
      <>
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
      </>
    )
  }
}



export default App;