import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";

function NavDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [MenuisOpen, setMenuIsOpen] = useState(false);
    const userName = useSelector((state) => state.userName);
    const location = useLocation();
    const PageName = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/data123';
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);







    console.log("userName>>>", userName); // undefined
    var userNameData;
    var link = "";
    if (userName === 'undefined') {
        userNameData = "View"
    } else {
        link = userName;
        userNameData = userName.charAt(0).toUpperCase() + userName.slice(1)
    }



    let LinkPages = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about us" },
        {
            name: "Services",
            dropdown: true,
            subLinks: [
                { name: "Own Status", link: "/own status" },
                { name: "Create Page", link: "/create page" },
                { name: `${userNameData}'s Page`, link: `/Add Page/${link}` },
                { name: "Upload Add", link: "/Upload Ads" }
            ]
        },
        { name: "Contact us", link: "/contact us" }
    ];

    return (
        <div className={`hidden mdl:block md:block sm:block flex relative text-center border-2 border-transparent active:border-itemActive rounded-lg`}>
            <button
                className="flex items-center ms-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMdMenu size={35} color={`${PageName ? 'black' : 'white'}`} />
                {/* {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />} */}
            </button>

            {isOpen && (
                <div className="-ml-3 mt-1 rounded-t-lg rounded-b-xl absolute right-0 flex flex-col bg-black z-10 text-white px-2">
                    {LinkPages.map((menuItem, index) => (
                        <div key={index}>
                            {menuItem.dropdown ? (
                                <div className="leading-4 pt-1.5 pl-3.5 pb-2 pr-3.5 border-b-2 border-white">
                                    <button onClick={() => setMenuIsOpen(!MenuisOpen)} className="inline">
                                        <p className="flex flex-row ">
                                            {menuItem.name} <IoMdArrowDropdown />
                                        </p>
                                    </button>
                                    {MenuisOpen && (
                                        <div className="">
                                            {menuItem.subLinks.map((subLink, subIndex) => (
                                                <div key={subIndex} className="leading-4 pt-1.5  pb-2 border-b-2 border-white">
                                                    <Link to={subLink.link}>{subLink.name}</Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="leading-4 pt-1.5 pl-3.5 pb-2 pr-3.5 border-b-2 border-white">
                                    <Link to={menuItem.link}>{menuItem.name}</Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="h-1"></div>
                </div>
            )}
        </div>
    );
}

export default NavDropDown;
