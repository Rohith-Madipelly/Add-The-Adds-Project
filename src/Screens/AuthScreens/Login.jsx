import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/loginAction";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useFormik } from "formik";
import { loginValidationSchema } from "./validationSchemas/LoginValidations.jsx";

import { UserLoginAPI } from "../../utils/APIcall.jsx";
import {
  showToastMessage_error,
  showToastMessage_success,
  showToastMessage_warn,
} from "../../shared/Toaster.jsx";
import { Alert } from "flowbite-react";
// import Loader2 from "../../shared/Loaders/Loader2.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const Checker = () => {
    // Check if there's a state with a message
    if (location.state && location.state.message) {
      // Show toaster notification with the message
      showToastMessage_warn(location.state.message);
    }
  };

  const [emailOrPhoneApiErr, setEmailOrPhoneApiErr] = useState("");
  const [passwordApiErr, setPasswordApiErr] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Checker();
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      let loginFormData;

      // Verify whether the entered field is a phone number or an email address.
      if (/^\d+$/.test(values.emailOrPhone)) {
        loginFormData = { phone_number: values.emailOrPhone };
      } else {
        loginFormData = { email: values.emailOrPhone };
      }

      loginFormData.password = values.password;

      // API Call
      const res = await UserLoginAPI(loginFormData);

      if (res.status === 200) {
        showToastMessage_success(res.data.message);
        setEmailOrPhoneApiErr("");
        setPasswordApiErr("");
        dispatch(setToken(res.data.token, res.data.userName,res.data.isAdmin));
        
       

        setTimeout(() => {
          navigate("/");
         
        }, 200);
      } else {
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setPasswordApiErr("Incorrect Password");
        } else if (error.response.status === 404) {
          setEmailOrPhoneApiErr(
            "Account does not exist with the provided email or phone number"
          );
        } else if (error.response.status === 500) {
          console.log("Data Error Internal server error 500 ", error);
          showToastMessage_error("Internal server error 500");
        } else {
          console.log("Error else ?? ");
        }
      } else if (error.request) {
        showToastMessage_error(
          `No response received from the server. ${error.message} . Please Try Again `
        );
      } else {
        showToastMessage_error("Error setting up the request.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    // Resetting error states when input value changes
    setEmailOrPhoneApiErr("");
    setPasswordApiErr("");
    handleChange(e);
  };

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  return (
    <section className="font-mainFont">
      <div className="flex items-center justify-center pt-[5%] sm:mx-5 md:mx-5 mdl:w-[769px] mx-auto lg:w-[895px] xl:w-[900px] 2xl:w-[1000px] h-[600px] sm:h-[480px] sm:mt-20">
        <div className="hidden lg:block xl:block 2xl:block w-[50%] h-full">
          <img
            src={"/images/AuthBanner/AuthBanner.jpeg"}
            alt="login hero img"
            className="object-cover rounded-r-0 rounded-l-lg  h-full w-full brightness-25"
          />
        </div>
        <div className=" sm:w-full md:w-full mdl:w-full w-[50%] h-full bg-white rounded-lg border-[0.7px] lg:-ml-2 xl:-m-2 2xl:-m-2 z-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-[24px]">Sign In</h1>
              <p className="sm:text-[14px] text-slate-500">
                Lets build something great
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="emailOrPhone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail or phone number
                </label>
                <input
                  value={values.emailOrPhone}
                  // onChange={handleInputChange}
                  onChange={(e) => {
                    const value = e.target.value || "";
                    setFieldValue("emailOrPhone", value.toLowerCase());
                    handleInputChange;
                  }}
                  // onChange={handleInputChange}
                  onBlur={handleBlur}
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                  ${
                    (errors.emailOrPhone && touched.emailOrPhone) ||
                    emailOrPhoneApiErr
                      ? "border-red-500!important"
                      : ""
                  }`}
                  placeholder="Enter your email or phone number"
                />
                {errors.emailOrPhone && touched.emailOrPhone && (
                  <small className="text-red-500 mt-1">
                    {errors.emailOrPhone}
                  </small>
                )}
                {emailOrPhoneApiErr && (
                  <small className="text-red-500 mt-1">
                    {emailOrPhoneApiErr}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    value={values.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 relative 
                    ${
                      (errors.password && touched.password) || passwordApiErr
                        ? "border-red-500"
                        : ""
                    }`}
                    required=""
                  />
                  {isPasswordVisible ? (
                    <AiOutlineEye
                      fill="#949CA9"
                      onClick={togglePasswordVisibility}
                      className="absolute top-0 right-0 mt-4 mr-3"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      fill="#949CA9"
                      onClick={togglePasswordVisibility}
                      className="absolute top-0 right-0 mt-4 mr-3"
                    />
                  )}
                </div>
                {errors.password && touched.password && (
                  <small className="text-red-500 mt-1">{errors.password}</small>
                )}
                {passwordApiErr && (
                  <small className="text-red-500 mt-1">{passwordApiErr}</small>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white rounded-lg px-5 py-2.5 text-center
                bg-blue-700 ${isSubmitting ? "opacity-35" : ""}`}
                >
                  {isSubmitting ? "Logging In..." : "Login"}
                </button>
              </div>

              <div className="text-right">
                <Link
                  to={"/forgot-password"}
                  className="text-[13px] text-blue-800"
                >
                  Forgot password?
                </Link>
              </div>
              <p className="text-sm text-center font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-blue-400 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* {isLoading && (
        <div className="absolute top-[50%] left-[50%] z-50 w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-500"></div>
      )} */}
    </section>
  );
};

export default Login;
