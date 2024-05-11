import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages 

const Login = lazy(() => import('./Screens/AuthScreens/Login'));
const Home = lazy(() => import('./Screens/MainScreens/Home/Home'));
const OwnStatus = lazy(() => import('./Screens/OwnStatus'));
const EditOwnPage = lazy(() => import('./Screens/MainScreens/EditOwnPage/EditOwnPage'));
const AddPage = lazy(() => import('./Screens/MainScreens/AddPage'));
const NotFoundPage = lazy(() => import('./Screens/NotFoundPage'));


const CreatePage = lazy(() => import('./Screens/MainScreens/CreatePage/CreatePage'));
const ContactUs = lazy(() => import('./Screens/MainScreens/OtherPages/ContactUs'));
const Services = lazy(() => import('./Screens/MainScreens/OtherPages/Services'));
const About = lazy(() => import('./Screens/MainScreens/OtherPages/About'));
const FAQ = lazy(() => import('./Screens/MainScreens/OtherPages/FAQ'));


const TermsandCondition = lazy(() => import('./Screens/MainScreens/OtherPages/TermsandCondition'));
const PrivacyPolicy = lazy(() => import('./Screens/MainScreens/OtherPages/PrivacyPolicy'));
const Desktop = lazy(() => import('./Screens/Desktop'));
const License = lazy(() => import('./Screens/MainScreens/OtherPages/License'));
const Blog = lazy(() => import('./Screens/MainScreens/OtherPages/Blog'));



const UploadPage = lazy(() => import('./Screens/MainScreens/UploadAdd/UploadAdd'));
const Trending = lazy(() => import('./Screens/MainScreens/OtherPages/Trending'));
const Festivals = lazy(() => import('./Screens/MainScreens/OtherPages/Festivals'));
const Register = lazy(() => import('./Screens/AuthScreens/Register'));



import Profile from "./Screens/MainScreens/Profile/Profile";
import EditOwnPageC from "./Screens/MainScreens/EditOwnPage/EditOwnPageC";


const ForgotPass = lazy(() => import('./Screens/AuthScreens/ForgotPassword'));
const VerifyOtp = lazy(() => import('./Screens/AuthScreens/VerifyOtp'));
const ChangePassword = lazy(() => import('./Screens/AuthScreens/ChangePassword,'));


import { ToastContainer } from "react-toastify";



import ShareButton from "./Screens/TestingScreens/ShareButton";
import PaymentTest from "./Components/Razorpay/PaymentTest";

const Loader = lazy(() => import("./shared/Loaders/Loader1"));
const LoadingFallback = () => <Loader />;

function App() {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
        <Route path="/PaymentTest" element={<PaymentTest />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Own Status"  element={isLogin ? <OwnStatus /> : <Navigate to="/login" state={{ from: "Own Status", message: "Login is required" }}/>} /> */}
          <Route path="/Own Status"  element={<OwnStatus /> } />
          <Route path="/Edit Own Page" element={<EditOwnPage />} />
          <Route path="/Edit Own Page/:id" element={<EditOwnPageC />} />
          {/* <Route path="/Add Page" element={isLogin ? <AddPage /> : <Navigate to="/login" state={{ from: "Add Page", message: "Login is required" }}/>} /> */}
          <Route path="/Profile" element={isLogin ? <Profile /> : <Navigate to="/login" state={{ from: "Profile", message: "Login is required" }}/>} />

          <Route path="/Add Page/:userNameParams" element={<AddPage />} />
          <Route path="/Create Page" element={isLogin ? <CreatePage /> : <Navigate to="/login"  state={{ from: "Create Page", message: "Login is required" }}/>} />
          <Route path="/Upload ads" element={isLogin ? <UploadPage /> : <Navigate to="/login" state={{ from: "Upload add", message: "Login is required" }}  />} />





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
