import { useFormik } from "formik";
import axios from "axios";
import { ForgotPassEmailValidation } from "./validationSchemas/ForgotPassEmailValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [emailApiErr, setEmailApiErr] = useState("");
  const [OtpApiErr, setOtpApiErr] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://admin.addtheadd.com/otp`,
        values
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("OTP has been sent to your  email!");
        setEmailApiErr("");
        setOtpApiErr("");
        console.log("otp sent >>>>>> ");
        navigate("/verify-otp", { state: { email: values.email } });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setEmailApiErr("Email does not exist");
      } else if (error.response.status === 429) {
        setOtpApiErr('Failed to send otp. Check email configuration');
      }
    } finally {
      resetForm();
    }
  };
  const handleInputChange = (e) => {
    // Resetting error states when input value changes
    setEmailApiErr("");
    setOtpApiErr("");
    handleChange(e);
  };
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPassEmailValidation,
    onSubmit,
  });

  return (
    <section className="font-mainFont ">
      <div className="flex items-center justify-center pt-[5%] sm:mx-5 md:mx-5 mdl:w-[769px] mx-auto lg:w-[895px] xl:w-[900px] 2xl:w-[1000px]  sm:h-[480px]">
        <div className="hidden lg:block xl:block 2xl:block w-[50%] h-full">
          <img
            src={"/images/AuthBanner/AuthBanner.jpeg"}
            alt="login hero img"
            className="object-cover rounded-2xl shadow-[-10px_0px_300px_0px_#6fd9ff]  h-full w-full"
          />
        </div>
        <div className=" sm:w-full md:w-full mdl:w-full w-[50%] h-full sm:shadow-[-10px_0px_300px_0px_#6fd9ff] md:shadow-[-10px_0px_300px_0px_#6fd9ff] mdl:shadow-[-10px_0px_300px_0px_#6fd9ff] bg-white rounded-lg border-[0.5px] lg:-ml-2 xl:-m-2 2xl:-m-2 z-10">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-[24px]">Forgot Password</h1>
              <p className="sm:text-[14px] text-slate-500">
                Enter your email and we will send you an OTP
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail
                </label>
                <input
                  value={values.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  placeholder="Enter your email"
                  required=""
                />
                {errors.email && touched.email && (
                  <small className="text-red-500 mt-1">{errors.email}</small>
                )}
                {emailApiErr && (
                  <small className="text-red-500 mt-1">{emailApiErr}</small>
                )}
                {OtpApiErr && (
                  <small className="text-red-500 mt-1">{OtpApiErr}</small>
                )}
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white  rounded-lg px-5 py-2.5 text-center
                  bg-[#1A56DB] ${isSubmitting ? "opacity-35" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPass;
