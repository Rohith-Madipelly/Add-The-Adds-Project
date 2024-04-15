import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import Login from "./Screens/AuthScreens/Login";
import Home from "./Screens/MainScreens/Home/Home";
import OwnStatus from "./Screens/OwnStatus";
import EditOwnPage from "./Screens/MainScreens/EditOwnPage/EditOwnPage";
import AddPage from "./Screens/MainScreens/AddPage";
import NotFoundPage from "./Screens/NotFoundPage";

import CreatePage from "./Screens/MainScreens/CreatePage/CreatePage";
import ContactUs from "./Screens/MainScreens/OtherPages/ContactUs";
import Services from "./Screens/MainScreens/OtherPages/Services";
import About from "./Screens/MainScreens/OtherPages/About";
import FAQ from "./Screens/MainScreens/OtherPages/FAQ";

import TermsandCondition from "./Screens/MainScreens/OtherPages/TermsandCondition";
import PrivacyPolicy from "./Screens/MainScreens/OtherPages/PrivacyPolicy";
import Desktop from "./Screens/Desktop";
import License from "./Screens/MainScreens/OtherPages/License";
import Blog from "./Screens/MainScreens/OtherPages/Blog";
import { ToastContainer } from "react-toastify";
import UploadPage from "./Screens/MainScreens/UploadAdd/UploadAdd";
import Trending from "./Screens/MainScreens/OtherPages/Trending";
import Festivals from "./Screens/MainScreens/OtherPages/Festivals";
import Register from "./Screens/AuthScreens/Register";
import Tester from "./Screens/MainScreens/Tester";
import Profile from "./Screens/MainScreens/Profile/Profile";
import EditOwnPageC from "./Screens/MainScreens/EditOwnPage/EditOwnPageC";

import ForgotPass from "./Screens/AuthScreens/ForgotPassword";
import VerifyOtp from "./Screens/AuthScreens/VerifyOtp";
import ChangePassword from "./Screens/AuthScreens/ChangePassword,";



import ShareButton from "./Screens/TestingScreens/ShareButton";

const Loader = lazy(() => import("./shared/Loaders/Loader1"));
const LoadingFallback = () => <Loader />;

function App() {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Own Status"  element={isLogin ? <OwnStatus /> : <Navigate to="/login" state={{ from: "Own Status", message: "Login is required" }}/>} /> */}
          <Route path="/Own Status"  element={<OwnStatus /> } />
          <Route path="/Edit Own Page" element={<EditOwnPage />} />
          <Route path="/Edit Own Page/:id" element={<EditOwnPageC />} />
          <Route path="/Add Page" element={isLogin ? <AddPage /> : <Navigate to="/login" state={{ from: "Add Page", message: "Login is required" }}/>} />
          <Route path="/Profile" element={isLogin ? <Profile /> : <Navigate to="/login" state={{ from: "Profile", message: "Login is required" }}/>} />

          <Route path="/Add Page/:userNameParams" element={<AddPage />} />
          <Route path="/Create Page" element={isLogin ? <CreatePage /> : <Navigate to="/login"  state={{ from: "Create Page", message: "Login is required" }}/>} />
          <Route path="/Upload add" element={isLogin ? <UploadPage /> : <Navigate to="/login" state={{ from: "Upload add", message: "Login is required" }}  />} />





          <Route path="/d123" element={<ShareButton />} />

          <Route path="/d" element={<Desktop />} />
          <Route path="/About us" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Festivals" element={<Festivals />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/License" element={<License />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact us" element={<ContactUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Terms of use" element={<TermsandCondition />} />
          <Route path="/Privacy Policy" element={<PrivacyPolicy />} />

          <Route path="/Login" element={!isLogin ? <Login /> : <Navigate to="/profile" />}/>
          <Route path="/signup" element={isLogin ? <Home /> : <Register />} />
          <Route path="/forgot-password" element={isLogin ? <Home /> : <ForgotPass />}/>
          <Route path="/verify-otp" element={isLogin ? <Home /> : <VerifyOtp />}/>
          <Route path="/change-password" element={isLogin ? <Home /> : <ChangePassword />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
