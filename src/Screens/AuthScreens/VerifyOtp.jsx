import { useFormik } from "formik";
import axios from "axios";
import { VerifyOtpValidation } from "./validationSchemas/VerifyOtpValidation";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [OtpApiErr, setOtpApiErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [otpLength, setOtpLength] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://admin.addtheadd.com/verifyotp`,
        {
          //this below email is retrieved from redux store which is taken from user in the forgot password page
          // as we need it to hit verify otp api with the entered otp
          email: email,
          userOtp: values.otp,
        }
      );
      if (response.status === 200) {
        console.log("VERIFIED>>>>>>>>>", response);
        navigate("/change-password", {
          state: { email: email, token: response.data.token },
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 403) {
        setOtpApiErr("Otp does not match");
      } else if (error.response.status === 401) {
        setOtpApiErr("invalid otp");
      } else if (error.response.status === 500) {
        setServerErr("internal server error");
      }
    } finally {
      resetForm();
    }
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
      otp: "",
    },
    validationSchema: VerifyOtpValidation,
    onSubmit,
  });

  const isButtonDisabled = otpLength !== 6 || isSubmitting;

  return (
    <section className="font-mainFont">
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
              <h1 className="text-[24px]">Otp Verification</h1>
              <p className="sm:text-[14px] text-slate-500">
                Enter the Otp that is sent to your mail
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="flex flex-col items-center">
                <input
                  value={values.otp}
                  onChange={(e) => {
                    const formattedValue = e.target.value.replace(/\D/g, "");
                    handleChange({
                      target: { name: "otp", value: formattedValue },
                    });
                    setOtpLength(formattedValue.length);
                    setOtpApiErr("");
                  }}
                  onBlur={handleBlur}
                  type="tel"
                  maxLength={6}
                  name="otp"
                  id="otp"
                  className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[110px] p-2.5 tracking-[5px] text-center ${
                    errors.otp && touched.otp ? "border-red-500" : ""
                  }`}
                  placeholder="Otp"
                  required=""
                />
                {errors.otp && touched.otp && (
                  <small className="text-red-500 text-sm mt-1">
                    {errors.otp}
                  </small>
                )}
                {OtpApiErr && (
                  <small className="text-red-500 text-sm mt-1">
                    {OtpApiErr}
                  </small>
                )}
              </div>

              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full text-white  rounded-lg px-5 py-2.5 text-center
                bg-[#1A56DB] ${isSubmitting ? "opacity-35" : ""}`}
              >
                {isSubmitting ? "Verifying..." : "Verify"}
              </button>
              {serverErr && (
                <small className="text-red-500 mt-1">{serverErr}</small>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
