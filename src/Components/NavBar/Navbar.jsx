import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import NavDropDown from "./NavDropDown/NavDropDown";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/actions/loginAction";
import { CgProfile } from "react-icons/cg";

import '../../Screens/MainScreens/CreatePage/Carousel.css'

import Logo from './../../assets/Logo.png'

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.isLogin);
  const userName = useSelector((state) => state.userName);
  console.log("Hello user Token is ", loginSelector);
  const PageName =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/data123";
  const NavBarDisplay =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/verify-otp" ||
    location.pathname === "/change-password" ||
    location.pathname === "/forget";

  let LinkPages = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/About us" },
    // { name: "Services", link: "/Services" },
    { name: "Contact us", link: "/Contact us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    let confirmation = confirm("Are you sure you want to logout?");

    // Check user's choice
    if (confirmation) {
      // If user clicked OK, proceed with logout
      alert("Logged out successfully!");
      // Perform logout actions here, such as redirecting to a logout page
    } else {
      // If user clicked Cancel, do nothing or provide feedback
      alert("Logout canceled!");
    }
    console.log("Clear the token from localStorage");
    dispatch(setToken(""));
    dispatch(setToken(""));
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };


  return (
    <div
      className={`w-full px-[5em] sm:px-0 mdl:px-[2.5em] md:px-[1em] fixed z-50 ${PageName ? "bg-white" : "bg-black"
        } ${NavBarDisplay ? "hidden" : "block"}`}
    >
      <div className="flex items-center justify-between h-[60px]">
        <h2
          className={`cursor-pointer sm:text-lg  ${PageName ? "text-black" : "text-white"
            }  !text-black-900 text-xl !font-balootamma text-white-A700 font-dmsans text-white-A700 font-dmsans w-[40%] sm:w-[70%] !text-black-900  !font-balootamma font-bold ps-1`}
        >
          <Link to={"/"} className="inline w-100"><div className="inline flex" style={{ textAlign: 'center' }}>
            <img src={Logo} alt="logo" style={{
              width: 45, marginTop: 5, marginLeft: 30, 
              '@media (min-width: 730px)': {
                marginTop: 25, // Adjust as needed
                // Additional styles for smaller screens
              }
            }} className="logoCss" />
            {/* <p className="m-3">Add The Adds.com</p> */}
            </div></Link>

        </h2>
        <div className="flex justify-end  gap-0 ">
          <ul className="sm:hidden mdl:hidden md:hidden flex  mdl:gap-8 lg:gap-5 xl:gap-5 2xl:gap-5 me-5 mt-0 ">
            {LinkPages.map((linkBtns) => (
              <li className="md:ml-8 text-xl flex mdl:sm " key={linkBtns.name}>
                {/* <p>{linkBtns.name}</p> */}
                <Link
                  to={linkBtns.link}
                  className={`!text-black-900 tracking-[1.00px] !font-normal text-shadow-ts1  ${PageName ? "text-black" : "text-white"
                    }`}
                >
                  {linkBtns.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="sm:hidden mdl:hidden md:hidden flex  mdl:gap-8 lg:gap-5 xl:gap-5 2xl:gap-5 me-5 mt-0 ">
            <li className="md:ml-8 text-xl flex mdl:sm ">
              <div className="relative inline-block">
                <button
                  id="dropdownHoverButton"
                  className={` focus:outline-none font-medium  inline-flex items-center !text-black-900 tracking-[1.00px] !font-normal text-shadow-ts1 ${PageName ? "text-black" : "text-white"
                    }`}
                  type="button"
                  onClick={toggleDropdown}
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div
                    id="dropdownHover"
                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <a
                          href="Own Status"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Own Status
                        </a>
                      </li>

                      <li>
                        <a
                          href="Create Page"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Create Page
                        </a>
                      </li>

                      {userName?<li>
                        <a
                          href={`Add Page/${userName}`}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        {userName?`${userName} Page`:"My Page"}
                        </a>
                      </li>:<li>
                        <a
                          href={`login`}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        {userName?`${userName} Page`:"My Page"}
                        </a>
                      </li>}

                      <li>
                        <a
                          href="Upload Add"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Upload Add
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>

          {/* {loginSelector ? <ul className='sm:hidden mdl:hidden md:hidden flex  mdl:gap-8 lg:gap-5 xl:gap-5 2xl:gap-5 me-5 mt-0 '>

                        <li className='md:ml-8 text-xl flex mdl:sm '>

                         
                            <Link to="/profile" className={`!text-black-900 tracking-[1.00px] !font-normal text-shadow-ts1 mt-1 ${PageName ? 'text-black' : 'text-white'}`}>
                                <CgProfile size={25} />
                            </Link>
                        </li>


                    </ul> : ""} */}

          {!loginSelector ? (
            <button
              className={`shadow font-[Poppins] rounded md:ml-8 
        hover: duration-500 flex items-center justify-center h-9 text-black-900 tracking-[1.00px] 
        text-center text-xl border-black-900_33 border border-solid bg-white-A700 shadow-xs min-w-[103px] rounded-[10px] ${PageName ? "text-black" : "text-white"
                } mx-0`}
            >
              <Link to={"/login"}>Login</Link>
            </button>
          ) : (
            <button
              className={`shadow font-[Poppins] rounded md:ml-8 
        hover: duration-500 flex items-center justify-center h-9 text-black-900 tracking-[1.00px] 
        text-center text-xl border-black-900_33 border border-solid bg-white-A700 shadow-xs min-w-[103px] rounded-[10px] ${PageName ? "text-black" : "text-white"
                } mx-0`}
            >
              <Link onClick={handleLogout}>Logout</Link>
            </button>
          )}

          <NavDropDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
