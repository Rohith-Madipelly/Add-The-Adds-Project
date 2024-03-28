import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import NavDropDown from './NavDropDown/NavDropDown'
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/actions/loginAction';

const NavBar = () => {
    const location = useLocation();
    const dispatch =useDispatch();
    const loginSelector = useSelector((state) => state.isLogin);
    console.log("Hello user Token is ",loginSelector)
    const PageName = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/data123';
    const NavBarDisplay = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forget';

    let LinkPages = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/About us" },
        { name: "Services", link: "/Services" },
        { name: "Contact us", link: "/Contact us" },
    ]

    const handleLogout = () => {

        console.log("Clear the token from localStorage")
        dispatch(setToken(""));
        localStorage.removeItem('token');
      };
    

    return (
        <div className={`w-full px-[5em] sm:px-0 mdl:px-[2.5em] md:px-[1em] fixed z-50 ${PageName ? 'bg-white' : 'bg-black'} ${NavBarDisplay ? 'hidden' : 'block'}`}>
            <div className='flex items-center justify-between h-[60px]'>
                <h2 className={`cursor-pointer sm:text-lg  ${PageName ? 'text-black' : 'text-white'}  !text-black-900 text-xl !font-balootamma text-white-A700 font-dmsans text-white-A700 font-dmsans w-[40%] sm:w-[70%] !text-black-900  !font-balootamma font-bold ps-1`}>
                    <Link to={'/'}>Add the Adds.com</Link>
                </h2>
                <div className='flex justify-end  gap-0 '>


                    <ul className='sm:hidden mdl:hidden md:hidden flex  mdl:gap-8 lg:gap-5 xl:gap-5 2xl:gap-5 me-5 mt-0 '>
                        {LinkPages.map((linkBtns) => (
                            <li className='md:ml-8 text-xl flex mdl:sm ' key={linkBtns.name}>

                                {/* <p>{linkBtns.name}</p> */}
                                <Link to={linkBtns.link} className={`!text-black-900 tracking-[1.00px] !font-normal text-shadow-ts1  ${PageName ? 'text-black' : 'text-white'}`}>{linkBtns.name}</Link>
                            </li>
                        ))}

                    </ul>

                    {!loginSelector?<button className={`shadow font-[Poppins] rounded md:ml-8 
        hover: duration-500 flex items-center justify-center h-9 text-black-900 tracking-[1.00px] 
        text-center text-xl border-black-900_33 border border-solid bg-white-A700 shadow-xs min-w-[103px] rounded-[10px] ${PageName ? 'text-black' : 'text-white'} mx-0`}>
                        <Link to={'/login'}>Login</Link>
                        </button>:<button className={`shadow font-[Poppins] rounded md:ml-8 
        hover: duration-500 flex items-center justify-center h-9 text-black-900 tracking-[1.00px] 
        text-center text-xl border-black-900_33 border border-solid bg-white-A700 shadow-xs min-w-[103px] rounded-[10px] ${PageName ? 'text-black' : 'text-white'} mx-0`}>
                        <Link onClick={handleLogout}>LogOut 123</Link>
                        </button>}

                    <NavDropDown />
                </div>
            </div>
        </div>

    )
}

export default NavBar