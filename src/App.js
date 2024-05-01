import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles/App.scss';
import NavHeader from './components/Navbar/NavHeader'
import AppRoutes from './routes/AppRoutes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { getUserRefresh } from './slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  const dispatch = useDispatch()
  const isRefreshingUser = useSelector(state => state.user.isRefreshingUser)
  const isRemoving = useSelector(state => state.user.isRemoving)
  const user = useSelector(state => state.user.user)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (!user) {
      dispatch(getUserRefresh())
    }
    // eslint-disable-next-line
  }, [user])

  useEffect(() => {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    setScrollHeight(windowHeight)
    setScrollWidth(windowWidth)
  }, [])

  if (isRefreshingUser || isRemoving) {
    return (
      <LoadingSpinner />
    )
  } else {
    return (
      <Scrollbars style={{ width: scrollWidth, height: scrollHeight }}>
        <Router>
          <div className='nav-container'>
            <NavHeader />
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
      </Scrollbars>
    )
  }
}



export default App;