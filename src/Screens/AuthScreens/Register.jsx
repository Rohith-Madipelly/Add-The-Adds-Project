import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/loginAction";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useFormik } from "formik";
import { signUpValidationSchema } from "./validationSchemas/SignUpValidations.jsx";

import { UserLoginAPI } from "../../utils/APIcall.jsx";
import {
  showToastMessage_error,
  showToastMessage_success,
} from "../../shared/Toaster.jsx";
// import Loader2 from "../../shared/Loaders/Loader2.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailOrPhoneApiErr, setEmailOrPhoneApiErr] = useState("");
  const [passwordApiErr, setPasswordApiErr] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        dispatch(setToken(res.data.token));
        navigate("/");
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
      username: "",
      phone_number: "",
      email: "",
      password: "",
      confirmPassword: "",
      pagename: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit,
  });

  return (
    <section className="font-mainFont sm:mt-8 md:mt-14 mdl:mt-16 lg:mt-16 xl:mt-16 2xl:mt-20">
      <div className="flex items-center justify-center sm:mx-5 md:mx-5 mdl:w-[769px] mx-auto lg:w-[895px] xl:w-[900px] 2xl:w-[1000px]">
        <div className="hidden lg:block xl:block 2xl:block w-[50%] h- h-[480px]">
          <img
            src={"/images/AuthBanner/AuthBanner.jpeg"}
            alt="login hero img"
            className="object-cover rounded-r-0 rounded-l-full h-full shadow-[-10px_0px_300px_0px_#6fd9ff] brightness-25"
          />
        </div>
        <div className=" sm:w-full md:w-full mdl:w-full w-[50%] h-full sm:shadow-[-10px_0px_300px_0px_#fbd38d] md:shadow-[-10px_0px_300px_0px_#fbd38d] mdl:shadow-[-10px_0px_300px_0px_#fbd38d] bg-white rounded-xl border-[0.2px]  lg:-ml-2 xl:-m-2 2xl:-m-2 z-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-[24px]">Sign Up</h1>
              <p className="sm:text-[14px] text-slate-500">
                Enter details to create your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              // action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  User name<span className="text-red-600">*</span>
                </label>
                <input
                  value={values.username}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  type="username"
                  name="username"
                  id="username"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.username && touched.username ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your name"
                  required=""
                />
                {errors.username && touched.username && (
                  <small className="text-red-500 ">{errors.username}</small>
                )}
                {/* {userNameApiErr && (
                  <small className="text-red-500 ">{userNameApiErr}</small>
                )} */}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  E-mail<span className="text-red-600">*</span>
                </label>
                <input
                  value={values.email}
                  onChange={(e) => {
                    const value = e.target.value || "";
                    setFieldValue("email", value.toLowerCase());
                    handleInputChange;
                  }}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                  required=""
                />
                {errors.email && touched.email && (
                  <small className="text-red-500 ">{errors.email}</small>
                )}
                {/* {emailApiErr && (
                  <small className="text-red-500 ">{emailApiErr}</small>
                )} */}
              </div>
              <div>
                <label
                  htmlFor="tel"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Phone number<span className="text-red-600">*</span>
                </label>
                <input
                  value={values.phone_number}
                  onChange={(e) => {
                    const value = e.target.value || "";
                    setFieldValue("phone_number", value.replace(/\D/g, ""));
                    handleInputChange;
                  }}
                  maxLength={10}
                  onBlur={handleBlur}
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.phone_number && touched.phone_number
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Enter your phone number"
                  required=""
                />
                {errors.phone_number && touched.phone_number && (
                  <small className="text-red-500">{errors.phone_number}</small>
                )}
                {/* {PhoneApiErr && (
                  <small className="text-red-500">{PhoneApiErr}</small>
                )} */}
              </div>
              <div className="flex gap-2">
                <div className="w-2/4">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Password<span className="text-red-600">*</span>
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
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 relative ${
                        errors.password && touched.password
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
                    <small className="text-red-500 leading-0">
                      {errors.password}
                    </small>
                  )}
                  {passwordApiErr && (
                    <small className="text-red-500 ">{passwordApiErr}</small>
                  )}
                </div>
                <div className="w-2/4">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Confirm password<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      value={values.confirmPassword}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      type={isPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Re-enter your password"
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 relative ${
                        errors.confirmPassword && touched.confirmPassword
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
                  {errors.confirmPassword && touched.confirmPassword && (
                    <small className="text-red-500 leading-0">
                      {errors.confirmPassword}
                    </small>
                  )}
                  {passwordApiErr && (
                    <small className="text-red-500 ">{passwordApiErr}</small>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="pagename"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Create Page Name<span className="text-red-600">*</span>
                </label>
                <input
                  value={values.pagename}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  type="pagename"
                  name="pagename"
                  id="pagename"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  ${
                    errors.pagename && touched.pagename ? "border-red-500" : ""
                  }`}
                  placeholder="Page Name"
                />
                {errors.pagename && touched.pagename && (
                  <small className="text-red-500 leading-0">
                    {errors.pagename}
                  </small>
                )}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white  rounded-lg px-5 py-2.5 text-center
                bg-[#1A56DB] ${isSubmitting ? "opacity-35" : ""}`}
                >
                  {isSubmitting ? "Loading..." : "Sign Up"}
                </button>
              </div>
              <p className="text-sm text-center font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-[#2F93F6]   hover:underline"
                >
                  Log in
                </Link>
              </p>
              {/* {failedToSignUpApiErr && (
                <small className="text-red-500 ">{failedToSignUpApiErr}</small>
              )} */}
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
