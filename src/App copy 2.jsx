import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

// Pages

// Auth Pages
import Login from './Screens/AuthScreens/Login';
import Register from './Screens/AuthScreens/Register';


// Main Pages

import Home from './Screens/MainScreens/Home/Home';
import OwnStatus from './Screens/OwnStatus';
import EditOwnPage from './Screens/MainScreens/EditOwnPage/EditOwnPage';
import AddPage from './Screens/MainScreens/AddPage';




import NotFoundPage from './Screens/NotFoundPage';
import CreatePage from './Screens/MainScreens/CreatePage/CreatePage';
import UploadAdd from './Screens/MainScreens/UploadAdd/UploadAdd';
import Desktop from './Screens/Desktop';
import About from './Screens/MainScreens/OtherPages/About';
import Services from './Screens/MainScreens/OtherPages/Services';
import ContactUs from './Screens/MainScreens/OtherPages/ContactUs';
import Tester from './Screens/MainScreens/Tester';
// import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Loader = lazy(() => import('./shared/Loaders/Loader1'));

const LoadingFallback = () => <Loader />;




function App() {
  const loginSelector = useSelector((state) => state.isLogin);
  console.log("data here is login or not ", loginSelector)
  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<LoadingFallback />}>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About us' element={<About />} />
          <Route exact path='/Services' element={<Services />} />
          <Route exact path='/Contact us' element={<ContactUs />} />

          <Route exact path='/Tester' element={<Tester />} />

          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/Own Status' element={<OwnStatus />} />
          <Route exact path='/Edit Own Page' element={<EditOwnPage />} />
          <Route exact path='/Add Page' element={<AddPage />} />
          <Route exact path='/Create Page' element={<CreatePage />} />
          <Route exact path='/Upload add' element={<UploadAdd />} />
          <Route exact path='/d' element={<Desktop />} />

          {/* Auth Screen */}
          <Route path='/Login' element={!loginSelector ? <Login /> : <Home />} />
          <Route path='/signup' element={!loginSelector ? <Register /> : <Home />} />

          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </Suspense>
    </div>
  )
}

export default App