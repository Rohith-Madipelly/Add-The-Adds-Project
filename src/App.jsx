import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";



// Pages



// Auth Pages
import Login from './Screens/AuthScreens/Login';
// import Register from './Screens/AuthScreens/Register';


// Main Pages
import Home from './Screens/MainScreens/Home/Home'
import OwnStatus from './Screens/OwnStatus';
import EditOwnPage from './Screens/MainScreens/EditOwnPage/EditOwnPage';
import AddPage from './Screens/MainScreens/AddPage';

import NotFoundPage from './Screens/NotFoundPage';
import CreatePage from './Screens/MainScreens/CreatePage/CreatePage'
import ContactUs from './Screens/MainScreens/OtherPages/ContactUs';
import Services from './Screens/MainScreens/OtherPages/Services';

import About from './Screens/MainScreens/OtherPages/About';
import FAQ from './Screens/MainScreens/OtherPages/FAQ';
import TermsandCondition from './Screens/MainScreens/OtherPages/TermsandCondition';
import PrivacyPolicy from './Screens/MainScreens/OtherPages/PrivacyPolicy';
import Desktop from './Screens/Desktop';
import License from './Screens/MainScreens/OtherPages/License';
import Blog from './Screens/MainScreens/OtherPages/Blog';
import { ToastContainer } from 'react-toastify';
import UploadPage from './Screens/MainScreens/UploadAdd/UploadAdd';
import Trending from './Screens/MainScreens/OtherPages/Trending';
import Festivals from './Screens/MainScreens/OtherPages/Festivals';
import Register from './Screens/AuthScreens/Register';
import Test1 from './Screens/TestingScreens/Test1';
import Test2 from './Screens/TestingScreens/Test2';
import SearchF from './Screens/MainScreens/EditOwnPage/SearchF';



const Loader = lazy(() => import('./shared/Loaders/Loader1'));

const LoadingFallback = () => <Loader />;


function App() {
  const loginSelector = useSelector((state) => state.isLogin);
  console.log("data here is login or not ", loginSelector)


  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<LoadingFallback />}>
      
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />

          <Route exact path='/Own Status' element={<OwnStatus />} />
          <Route exact path='/Edit Own Page' element={<EditOwnPage />} />
          <Route exact path='/Add Page' element={<AddPage />} />
          <Route exact path='/Create Page' element={<CreatePage />} />
          <Route exact path='/Upload add' element={<UploadPage />} />
          <Route exact path='/d' element={<Desktop />} />


          <Route exact path='/About us' element={<About />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/Festivals' element={<Festivals />} />

          <Route exact path='/Trending' element={<Trending />} />
          <Route exact path='/License' element={<License />} />
          <Route exact path='/Services' element={<Services />} />
          <Route exact path='/Contact us' element={<ContactUs />} />
          <Route exact path='/FAQ' element={<FAQ />} />
          <Route exact path='/Terms of use' element={<TermsandCondition />} />
          <Route exact path='/Privacy Policy' element={<PrivacyPolicy />} />


          <Route exact path='/Test' element={<Test1 />} />
          <Route exact path='/Test2' element={<Test2 />} />
         
         
          <Route exact path='/SearchF' element={<SearchF />} />
          



          {/* Auth Screen */}
          <Route path='/Login' element={<Login />} />

          {/* <Route path='/Login' element={!loginSelector ? <Login /> : <Home />} /> */}
          <Route path='/signup' element={<Register />} />



          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </Suspense>

    </div>
  )
}

export default App