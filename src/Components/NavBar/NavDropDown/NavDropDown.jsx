import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
// import { Link } from 'react-router-dom';

function NavDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const PageName = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/data123';
    useEffect(()=>{
        setIsOpen(false)
    },[location.pathname])



    let LinkPages = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/About us" },
        { name: "Services", link: "/Services" },
        { name: "Contact us", link: "/Contact us" }
    ];



    return (
        <div className={`hidden mdl:block md:block sm:block flex  relative text-center  border-2 border-transparent active:border-itemActive rounded-lg `}>
            <button
                className="flex items-center ms-4"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                <IoMdMenu size={35} color={`${PageName ? 'black' : 'white'}`} />


                {/* {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />} */}
            </button>

            {isOpen && (
                <div className="-ml-3 mt-1 rounded-t-lg rounded-b-xl absolute right-0 flex flex-col bg-black z-10 text-white">
                    {LinkPages.map((Data) => (
                        <div className="leading-4 pt-1.5 pl-3.5 pb-2 pr-3.5 border-b-2 border-white">
                            <Link to={Data.link}>{Data.name}</Link>
                        </div>
                    ))}
                    <div className="h-1"></div>
                </div>
            )}
        </div>
    );
}

export default NavDropDown;
