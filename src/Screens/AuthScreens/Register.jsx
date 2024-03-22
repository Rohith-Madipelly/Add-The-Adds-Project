import React, { useState } from 'react'

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <section className="">
      <div className="flex flex-col 2xl:flex-row xl:flex-row   lg:flex-row items-center h-screen justify-center py-[50px] mx-5 2xl:mx-auto  lg:mx-auto lg:w-[895px] xl:w-[900px] 2xl:w-[1000px]">
        <div className="hidden lg:block xl:block 2xl:block 2xl:w-[1000px] 2xl:h-[490px] w-[700px] h-[495px] pe-5">
          <img
            src='/images/AuthBanner/AuthBanner.jpeg'
            alt="login hero img"
            className="object-cover rounded-r-0 rounded-l-lg  h-full w-full"
          />
        </div>
        <div className="w-full bg-white rounded-lg shadow-[0px_14px_207px_10px_rgba(72,_181,_255,_0.43)] z-100 2xl:h-[490px] lg:-ml-2 xl:-m-2 2xl:-m-2 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 z-10">
            <div className="text-center mb-8">
              <h1 className="text-[24px]">Sign Up</h1>
              <p className="sm:text-[14px] text-slate-500">
              Enter details to create your account
              </p>
            </div>
            <form
              // onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail or phone number
                </label>
                <input
                  // value={values.email}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your email or phone number"
                  required=""
                />


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
                    // value={values.password}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 relative"
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
              </div>

              <button
                type="submit"
                className="w-full text-white bg-darkPink rounded-lg px-5 py-2.5 text-center"
              >
                Login
              </button>

              <div className="text-right">
                <a href="#" className="text-[13px] text-sky-500">
                  Forgot password?
                </a>
              </div>



              <p className="text-sm text-center font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-sky-500   hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* <div>Hello</div> */}
      </div>
    </section>
  )
}

export default Register