import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.jsx'
import Footter from './Components/Footter.jsx'
import ScreenSizeDisplayer123 from './App copy.jsx'
import NavBar from './Components/NavBar/Navbar.jsx'

import "react-toastify/dist/ReactToastify.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <NavBar />
        <App />
        <Footter />
        <ScreenSizeDisplayer123 />
      </BrowserRouter>
    </Provider>

    {/* <Test1/> */}
  </React.StrictMode>,
)
