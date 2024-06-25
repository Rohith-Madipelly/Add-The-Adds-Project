import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Footter() {
  const [isTrue,setIsTrue]=useState(false)
  const location = useLocation();
  const FootterDisplay =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/verify-otp" ||
    location.pathname === "/change-password" ||
    location.pathname === "/forget";
  return (
    <div
      className={`w-[100%] bg-black  h-auto p-5 sm:p-1 text-white pt-5 ${
        FootterDisplay ? "hidden" : "block"
      }`}
    >
      <div className="p-5 sm:px-0 flex justify-center item-center">
        <div className="w-[70%] sm:w-[85%] ">
          <div className=" border-b-2 pb-5">
          <h4 className="tracking-[1.20px] uppercase py-2 text-2xl text-center sm:text-xl font-bold ">
                  BUSINESS VICTORY SOLUTIONS SOFTWARE COMPANY
                </h4>
              <button onClick={()=>setIsTrue(prevState => !prevState)} className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              Menu
              </button>

           { isTrue && <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 m-4 ">
              <div>
              <h3  className=" text-xl sm:text-base block">
                  Website Development
                </h3>
                <h3  className="text-xl sm:text-base block">
                  Mobile App Development
                </h3>
                <h3  className="text-xl sm:text-base block">
                  Advetising Ads Development
                </h3>

              <h3  className="text-xl sm:text-base block">
                  Social Media Promotions
                </h3>
                <h3  className="text-xl sm:text-base block">
                  Social Media Handling
                </h3>
                <h3  className="text-xl sm:text-base block">
                  Brand & Logos Designing
                </h3>
              </div>
  
              <div>
              <h3  className="text-xl sm:text-base block">
                  Celebrating Promotions
                </h3>
                <h3  className="text-xl sm:text-base block">
                  Digital Media Marketing
                  <ul style={{'list-style-type':"disc"}} className="text-left text-sm ml-8" >
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>Instagram Ads</li>
                  <li>Youtube Ads</li>
                  <li>Website Ads</li>
                  <li>addtheadd.com ads</li>
                 </ul>
                </h3>
                 
                
              </div>

              <div>
              <h3  className="text-xl sm:text-base block">
                  Contact
                </h3>
                <p>Business Victory Solutions</p>
                <p>Manager: <a href="tel:8523899330">8523899330</a>, <a href="tel:7993558948">7993558948</a></p>
                <p><a href="mailto:bvsadds@gmail.com">bvsadds@gmail.com</a></p>
                <p><a href="mailto:bvsaddshelpline@gmail.com">bvsaddshelpline@gmail.com</a></p>

              </div>
  
            </div>}
          </div>
          <p className="sm:text-sm text-center mt-4">
            Copyright @ 2024 Add the Add.com. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footter;
