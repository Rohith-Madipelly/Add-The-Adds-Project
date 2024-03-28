import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

function Footter() {
    const location = useLocation();
    const FootterDisplay = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forget';
    return (
        <div className={`w-[100%] bg-black  h-auto p-5 sm:p-1 text-white pt-5 ${FootterDisplay ? 'hidden' : 'block'}`}>
            <div className='p-5 sm:px-0 flex justify-center item-center'>
                <div className='w-[70%] sm:w-[85%] '>

                    <div className=' border-b-2 pb-5'>
                        <div className='grid grid-cols-4 sm:grid-cols-1 gap-3 '>
                            <div className=''>
                                <h4 className='tracking-[1.20px] uppercase py-2 text-2xl sm:text-xl font-bold '>CONTENT</h4>
                                <Link to={'/Festivals'} className='p-2 text-xl sm:text-base block'>Festivals</Link>
                                <Link to={'/Trending'} className='p-2 text-xl sm:text-base block'>Trending</Link>
                                <Link to={'/Blog'} className='p-2 text-xl sm:text-base block'>Blog</Link>
                            </div>
                            <div className=''>
                                <h3 className='tracking-[1.20px] uppercase py-2  text-2xl sm:text-xl font-bold'>Legal</h3>
                                <Link to={'/Terms of use'} className='p-2 text-xl sm:text-base block'>Terms of use</Link>
                                <Link to={'/License'} className='p-2 text-xl sm:text-base block'>License</Link>
                                <Link to={'/Privacy Policy'} className='p-2 text-xl sm:text-base block'>Privacy Policy</Link>
                            </div>
                            <div className=''>
                                <h3 className='tracking-[1.20px] uppercase py-2  text-2xl sm:text-xl font-bold'>Support</h3>
            
                                {/* <Link to={'/Contact us'}> <p className='p-2 text-xl sm:text-base'>Contact</p></Link> */}
                                <Link to={'/Faq'} className='p-2 text-xl sm:text-base block'>FAQ</Link>
                                <Link to={'/Contact us'} className='p-2 text-xl sm:text-base block'>Contact</Link>
                               

                            </div>
                            {/* </div> */}
                            <div className=''>
                                <h3 className='tracking-[1.20px] uppercase py-2  text-2xl sm:text-xl font-bold'>Social Media</h3>
                                <div className='flex gap-4 p-2 '>
                                    <Link to={'https://www.facebook.com/'} target="_blank"><img src='images/img_vector.svg'></img></Link>
                                    <Link to={'https://www.instagram.com/'} target="_blank"><img src='images/img_vector_white_a700.svg'></img></Link>
                                    <Link to={'https://www.linkedin.com/'} target="_blank"><img src='images/img_vector_white_a700_32x32.svg'></img></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='sm:text-sm text-center mt-4'>Copyright @ 2024 Add the Adds.com. All rights reserved</p>
                </div>

            </div>

        </div>
    )
}

export default Footter