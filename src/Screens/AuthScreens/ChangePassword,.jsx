import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { changePasswordValidation } from "./validationSchemas/changePasswordValidation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [failedApiErr, setFailedApiErr] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state && location.state.email && location.state.email) {
      setEmail(location.state.email);
      setToken(location.state.token);
    }
  }, [location.state]);

  const onSubmit = async () => {
    try {
      if (location.state && location.state.email) {
        setEmail(location.state.email);
      }
      const response = await axios.post(
        "https://admin.addtheadd.com/forgotPassword",
        { password: values.confirmPassword, email: email }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Password changed successfully!");
        // Redirects user to home page upon successful registration
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response.status === 403) {
        setFailedApiErr(error.response.data.message);
      } else if (error.response.status === 400) {
        setFailedApiErr(error.response.data.message);
      }
    } finally {
      // Reset loading state when operation completes
      resetForm();
    }
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
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordValidation,
    onSubmit,
  });

  return (
    <section className="font-mainFont">
      <div className="flex items-center justify-center pt-[5%] sm:mx-5 md:mx-5 mdl:w-[769px] mx-auto lg:w-[895px] xl:w-[900px] 2xl:w-[1000px] sm:h-[480px]">
        <div className="hidden lg:block xl:block 2xl:block w-[50%] h-full">
          <img
            src={"/images/AuthBanner/AuthBanner.jpeg"}
            alt="login hero img"
            className="object-cover rounded-r-0 rounded-2xl shadow-[-10px_0px_300px_0px_#6fd9ff]  h-full w-full brightness-25"
          />
        </div>
        <div className=" sm:w-full md:w-full mdl:w-full w-[50%] h-full sm:shadow-[-10px_0px_300px_0px_#6fd9ff] md:shadow-[-10px_0px_300px_0px_#6fd9ff] mdl:shadow-[-10px_0px_300px_0px_#6fd9ff] bg-white rounded-lg border-[0.5px] lg:-ml-2 xl:-m-2 2xl:-m-2 z-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-[24px]">Change Password</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Create new Password
                </label>
                <div className="relative">
                  <input
                    value={values.password}
                    onChange={handleChange}
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
                  <small className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={isPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
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
                  <small className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white  rounded-lg px-5 py-2.5 text-center
                  bg-[#1A56DB]  ${isSubmitting ? "opacity-35" : ""}`}
                >
                  {isSubmitting ? "Loading..." : "Confirm"}
                </button>
                {failedApiErr && (
                  <small className="text-red-500 text-sm mt-1">
                    {failedApiErr}
                  </small>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
